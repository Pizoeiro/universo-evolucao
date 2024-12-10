import React, { useEffect, useRef } from 'react';
import './StarBackground.css';

interface Node {
  x: number;
  y: number;
  connections: Node[];
  size: number;
  alpha: number;
  generation: number;
  pulsePhase: number;
  energyLevel: number;
  active: boolean;
  activationTime: number;
  pulses: Pulse[];
}

interface Pulse {
  progress: number;
  speed: number;
  alpha: number;
  targetNode: Node;
}

const StarBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const requestIdRef = useRef<number>();
  const timeRef = useRef<number>(0);
  const gridRef = useRef<Map<string, Node>>(new Map());

  const createNode = (x: number, y: number, generation: number = 0): Node => {
    const node: Node = {
      x,
      y,
      connections: [],
      size: 1.5 - (generation * 0.08), 
      alpha: 0,
      generation,
      pulsePhase: Math.random() * Math.PI * 2,
      energyLevel: 1,
      active: false,
      activationTime: 0,
      pulses: []
    };
    return node;
  };

  const getGridKey = (x: number, y: number) => `${Math.round(x)},${Math.round(y)}`;

  const getNodeColor = (node: Node, alpha: number) => {
    const baseIntensity = 1 - (node.generation * 0.1);
    const energyFactor = node.energyLevel * 0.2;
    const r = Math.floor((0.5 + energyFactor) * 255 * baseIntensity);
    const g = Math.floor((0.8 + energyFactor) * 255 * baseIntensity);
    const b = Math.floor((1.0 + energyFactor) * 255 * baseIntensity);
    return `rgba(${r},${g},${b},${alpha})`;
  };

  const drawPulse = (ctx: CanvasRenderingContext2D, startNode: Node, pulse: Pulse) => {
    const targetNode = pulse.targetNode;
    const x = startNode.x + (targetNode.x - startNode.x) * pulse.progress;
    const y = startNode.y + (targetNode.y - startNode.y) * pulse.progress;
    
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, 3);
    gradient.addColorStop(0, `rgba(0, 255, 255, ${pulse.alpha})`);
    gradient.addColorStop(1, 'rgba(0, 255, 255, 0)');
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, Math.PI * 2);
    ctx.fill();
  };

  const updatePulses = (node: Node) => {
    // Atualiza pulsos existentes
    node.pulses = node.pulses.filter(pulse => {
      pulse.progress += pulse.speed;
      pulse.alpha = Math.max(0, 1 - pulse.progress);
      return pulse.progress < 1;
    });

    // Cria novos pulsos aleatoriamente
    if (Math.random() < 0.01 && node.connections.length > 0) {
      const targetNode = node.connections[Math.floor(Math.random() * node.connections.length)];
      node.pulses.push({
        progress: 0,
        speed: 0.02,
        alpha: 1,
        targetNode
      });
    }
  };

  const drawNode = (ctx: CanvasRenderingContext2D, node: Node, time: number) => {
    if (node.alpha === 0) return;

    ctx.save();
    
    const pulseAlpha = 0.3 + Math.sin(node.pulsePhase + time * 0.002) * 0.15;

    node.connections.forEach(connectedNode => {
      if (connectedNode.alpha === 0) return;

      if (Math.max(node.x, connectedNode.x) < 0 || 
          Math.min(node.x, connectedNode.x) > ctx.canvas.width ||
          Math.max(node.y, connectedNode.y) < 0 || 
          Math.min(node.y, connectedNode.y) > ctx.canvas.height) {
        return;
      }

      const gradient = ctx.createLinearGradient(
        node.x, node.y,
        connectedNode.x, connectedNode.y
      );
      
      gradient.addColorStop(0, getNodeColor(node, pulseAlpha * 0.5));
      gradient.addColorStop(1, getNodeColor(connectedNode, pulseAlpha * 0.5));

      ctx.beginPath();
      ctx.strokeStyle = gradient;
      ctx.lineWidth = Math.min(node.size, connectedNode.size) * 0.2;
      ctx.moveTo(node.x, node.y);
      ctx.lineTo(connectedNode.x, connectedNode.y);
      ctx.stroke();
    });

    node.pulses.forEach(pulse => drawPulse(ctx, node, pulse));

    ctx.beginPath();
    ctx.fillStyle = getNodeColor(node, node.alpha * 0.8);
    ctx.arc(node.x, node.y, Math.max(0.1, node.size), 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  };

  const updateNodes = () => {
    nodesRef.current.forEach(node => {
      if (!node.active && timeRef.current >= node.activationTime) {
        node.active = true;
      }

      if (node.active && node.alpha < 0.6) {
        const verticalProgress = node.y / (canvasRef.current?.height || 1);
        const fadeSpeed = 0.05 + (verticalProgress * 0.03);
        node.alpha = Math.min(node.alpha + fadeSpeed, 0.6);
      }

      node.pulsePhase += 0.03; 
      updatePulses(node);
    });
  };

  const connectNearbyNodes = (node: Node, maxDistance: number) => {
    nodesRef.current.forEach(otherNode => {
      if (node === otherNode) return;
      
      const dx = node.x - otherNode.x;
      const dy = node.y - otherNode.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance <= maxDistance && 
          !node.connections.includes(otherNode) && 
          node.connections.length < 5 && 
          otherNode.connections.length < 5) {
        node.connections.push(otherNode);
        otherNode.connections.push(node);
      }
    });
  };

  const expandNetwork = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    const triangleSize = 30;
    let newNodesThisFrame = 0;
    const maxNewNodesPerFrame = 20;

    const activeNodes = nodesRef.current
      .filter(node => node.active)
      .sort(() => Math.random() - 0.5)
      .slice(0, 50);

    activeNodes.some(node => {
      if (newNodesThisFrame >= maxNewNodesPerFrame) return true;

      const angles = [];
      for (let i = 0; i < 6; i++) {
        angles.push((i * Math.PI) / 3);
      }

      angles.forEach(angle => {
        if (newNodesThisFrame >= maxNewNodesPerFrame) return;

        const distance = triangleSize * (1 + Math.random() * 0.3);
        const newX = node.x + Math.cos(angle) * distance;
        const newY = node.y + Math.sin(angle) * distance;

        if (newX < 0 || newX > canvas.width/dpr || 
            newY < 0 || newY > canvas.height/dpr) {
          return;
        }

        const gridKey = getGridKey(newX, newY);
        const checkArea = Math.floor(newX / (triangleSize * 2)) + "," + Math.floor(newY / (triangleSize * 2));
        
        if (gridRef.current.has(checkArea)) return;

        const tooClose = nodesRef.current.some(n => 
          Math.abs(n.x - newX) < triangleSize * 0.8 &&
          Math.abs(n.y - newY) < triangleSize * 0.8
        );

        if (tooClose) return;

        let probability = 0.6;
        const nearbyNodes = nodesRef.current.filter(n => 
          Math.abs(n.x - newX) < triangleSize * 2 &&
          Math.abs(n.y - newY) < triangleSize * 2
        ).length;

        probability *= Math.max(0.3, 1 - (nearbyNodes * 0.15));

        if (nearbyNodes < 2) probability *= 1.3;

        if (!gridRef.current.has(gridKey) && Math.random() < probability) {
          const newNode = createNode(newX, newY, node.generation + 1);
          
          // Conectar com o nó pai e outros nós próximos
          newNode.connections.push(node);
          node.connections.push(newNode);
          connectNearbyNodes(newNode, triangleSize * 2);

          gridRef.current.set(gridKey, newNode);
          gridRef.current.set(checkArea, true as any);
          nodesRef.current.push(newNode);

          newNode.activationTime = timeRef.current + 5;
          newNodesThisFrame++;
        }
      });

      return false;
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.scale(dpr, dpr);
        ctx.imageSmoothingEnabled = true;
        (ctx as CanvasRenderingContext2D).imageSmoothingQuality = 'high';
      }
      
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      
      nodesRef.current = [];
      gridRef.current.clear();
      
      const triangleSize = 30;
      const spacing = triangleSize * 3;
      
      // Criar grade de nós
      for (let y = 0; y < rect.height; y += spacing) {
        for (let x = 0; x < rect.width; x += spacing) {
          if (Math.random() < 0.08) {
            const node = createNode(x, y);
            node.active = true;
            node.alpha = 0.6;
            
            const gridKey = getGridKey(x, y);
            gridRef.current.set(gridKey, node);
            nodesRef.current.push(node);
          }
        }
      }

      // Conectar nós próximos após criar todos
      nodesRef.current.forEach(node => {
        connectNearbyNodes(node, spacing * 1.5);
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    let lastFrameTime = performance.now();
    let frameCount = 0;
    const frameInterval = 1000 / 30;

    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastFrameTime;

      if (deltaTime >= frameInterval) {
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        lastFrameTime = currentTime - (deltaTime % frameInterval);
        timeRef.current += 0.5;  

        ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
        ctx.fillRect(0, 0, canvas.width / (window.devicePixelRatio || 1), canvas.height / (window.devicePixelRatio || 1));

        if (frameCount % 4 === 0) {  
          expandNetwork();
        }
        frameCount++;

        const visibleNodes = nodesRef.current.filter(node => 
          node.x >= -50 && 
          node.x <= canvas.width / (window.devicePixelRatio || 1) + 50 &&
          node.y >= -50 && 
          node.y <= canvas.height / (window.devicePixelRatio || 1) + 50
        );

        updateNodes();
        visibleNodes.forEach(node => {
          drawNode(ctx, node, timeRef.current);
        });
      }

      requestIdRef.current = requestAnimationFrame(animate);
    };

    animate(performance.now());

    return () => {
      if (requestIdRef.current) {
        cancelAnimationFrame(requestIdRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="star-background"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        background: 'black',
        imageRendering: 'high-quality'
      }}
    />
  );
};

export default StarBackground;
