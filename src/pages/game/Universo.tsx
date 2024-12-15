import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBrain, FaTrophy, FaUser, FaMedal, FaGlobe, FaCog, FaLightbulb, FaShieldAlt, FaWifi, FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';
import useStore from '../../store/gameStore';
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import 'xterm/css/xterm.css';
import './Universo.css';

const Universo: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useStore();
  const terminalRef = useRef<HTMLDivElement>(null);
  const terminalInstance = useRef<Terminal | null>(null);
  const [interfaceSettings, setInterfaceSettings] = useState({
    power: 100,
    shield: 95,
    brightness: 100,
    networkMode: 'quantum',
  });
  const cleanupFunctionsRef = useRef<(() => void)[]>([]);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    const initTerminal = async () => {
      if (!terminalRef.current || terminalInstance.current) return;

      // Aguarda um momento para garantir que o DOM esteja pronto
      await new Promise(resolve => setTimeout(resolve, 0));

      const term = new Terminal({
        cursorBlink: true,
        fontSize: 14,
        fontFamily: 'monospace',
        rows: 10,
        cols: 80,
        theme: {
          background: '#0a1929',
          foreground: '#00ff00',
          cursor: '#00ff00',
          black: '#000000',
          blue: '#2472c8',
          cyan: '#11a8cd',
          green: '#0dbc79',
          magenta: '#bc3fbc',
          red: '#cd3131',
          white: '#e5e5e5',
          yellow: '#e5e510',
          brightBlack: '#808080',
          brightBlue: '#3b8eea',
          brightCyan: '#29b8db',
          brightGreen: '#23d18b',
          brightMagenta: '#d670d6',
          brightRed: '#f14c4c',
          brightWhite: '#e5e5e5',
          brightYellow: '#f5f543'
        }
      });

      const fitAddon = new FitAddon();
      term.loadAddon(fitAddon);

      // Aguarda um momento após criar o terminal
      await new Promise(resolve => setTimeout(resolve, 0));

      term.open(terminalRef.current);
      
      // Aguarda um momento após abrir o terminal
      await new Promise(resolve => setTimeout(resolve, 0));
      
      fitAddon.fit();
      terminalInstance.current = term;

      const writeSlowly = async (text: string, delay = 50) => {
        for (const char of text) {
          term.write(char);
          await new Promise(resolve => setTimeout(resolve, delay));
        }
        term.write('\r\n');
      };

      await writeSlowly('\x1B[1;3;32mNEXUS Command Center v1.0.0\x1B[0m');
      await writeSlowly(`\x1B[36mWelcome, Commander ${user.username}\x1B[0m`);
      await writeSlowly('Initializing systems...');
      await writeSlowly('> Quantum core... [OK]');
      await writeSlowly('> Neural networks... [OK]');
      await writeSlowly('> Holographic interface... [OK]');
      await writeSlowly('> All systems operational.');

      term.onKey(({ key, domEvent }) => {
        const printable = !domEvent.altKey && !domEvent.ctrlKey && !domEvent.metaKey;

        if (domEvent.keyCode === 13) { // Enter
          term.write('\r\n\x1B[32m$ \x1B[0m');
        } else if (domEvent.keyCode === 8) { // Backspace
          if (term.buffer.active.cursorX > 2) {
            term.write('\b \b');
          }
        } else if (printable) {
          term.write(key);
        }
      });

      term.write('\x1B[32m\r\n$ \x1B[0m');

      const handleResize = () => {
        fitAddon.fit();
      };

      window.addEventListener('resize', handleResize);
    };

    initTerminal();

    return () => {
      if (terminalInstance.current) {
        terminalInstance.current.dispose();
        terminalInstance.current = null;
      }
      window.removeEventListener('resize', () => {});
    };
  }, [user, navigate]);

  useEffect(() => {
    return () => {
      cleanupFunctionsRef.current.forEach(cleanup => cleanup());
      cleanupFunctionsRef.current = [];
    };
  }, []);

  const menuItems = [
    {
      title: "Redes Neurais",
      description: "Explore os diferentes mundos e níveis do jogo",
      icon: <FaGlobe />,
      path: "/worlds"
    },
    {
      title: "Rankings",
      description: "Veja sua posição no ranking global",
      icon: <FaTrophy />,
      path: "/rankings"
    },
    {
      title: "Perfil",
      description: "Visualize suas estatísticas e conquistas",
      icon: <FaUser />,
      path: "/game/profile"
    },
    {
      title: "Conquistas",
      description: "Acompanhe suas conquistas e desafios",
      icon: <FaMedal />,
      path: "/achievements"
    },
    {
      title: "Tutorial",
      description: "Aprenda como jogar e conheça as mecânicas",
      icon: <FaBrain />,
      path: "/tutorial"
    }
  ];

  const statusItems = [
    { 
      label: 'Power',
      value: `${interfaceSettings.power}%`,
      icon: <FaCog />,
      actions: [
        {
          name: 'Eco Mode',
          action: () => {
            setInterfaceSettings(prev => ({ ...prev, power: 60 }));
            document.documentElement.style.setProperty('--opacity-general', '0.8');
          }
        },
        {
          name: 'Performance Mode',
          action: () => {
            setInterfaceSettings(prev => ({ ...prev, power: 100 }));
            document.documentElement.style.setProperty('--opacity-general', '1');
          }
        }
      ]
    },
    {
      label: 'Shield',
      value: `${interfaceSettings.shield}%`,
      icon: <FaShieldAlt />,
      actions: [
        {
          name: 'Stealth Mode',
          action: () => {
            setInterfaceSettings(prev => ({ ...prev, shield: 50 }));
            document.documentElement.style.setProperty('--hologram-opacity', '0.3');
          }
        },
        {
          name: 'Defense Mode',
          action: () => {
            setInterfaceSettings(prev => ({ ...prev, shield: 100 }));
            document.documentElement.style.setProperty('--hologram-opacity', '1');
          }
        }
      ]
    },
    {
      label: 'Brightness',
      value: `${interfaceSettings.brightness}%`,
      icon: <FaLightbulb />,
      actions: [
        {
          name: 'Night Mode',
          action: () => {
            setInterfaceSettings(prev => ({ ...prev, brightness: 50 }));
            document.documentElement.style.setProperty('--glow-intensity', '0.5');
          }
        },
        {
          name: 'Day Mode',
          action: () => {
            setInterfaceSettings(prev => ({ ...prev, brightness: 100 }));
            document.documentElement.style.setProperty('--glow-intensity', '1');
          }
        }
      ]
    },
    {
      label: 'Network',
      value: interfaceSettings.networkMode,
      icon: <FaWifi />,
      actions: [
        {
          name: 'Quantum Network',
          action: () => {
            setInterfaceSettings(prev => ({ ...prev, networkMode: 'quantum' }));
            document.documentElement.style.setProperty('--animation-speed', '1');
          }
        },
        {
          name: 'Neural Network',
          action: () => {
            setInterfaceSettings(prev => ({ ...prev, networkMode: 'neural' }));
            document.documentElement.style.setProperty('--animation-speed', '2');
          }
        }
      ]
    }
  ];

  const renderConnectionLines = () => {
    const nodes: JSX.Element[] = [];
    const lines: JSX.Element[] = [];
    const numNodes = 15;

    for (let i = 0; i < numNodes; i++) {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const delay = Math.random() * 5;

      nodes.push(
        <motion.div
          key={`node-${i}`}
          className="neural-node"
          style={{
            left: `${x}%`,
            top: `${y}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3,
            delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      );

      for (let j = i + 1; j < numNodes; j++) {
        if (Math.random() > 0.7) {
          const x2 = Math.random() * 100;
          const y2 = Math.random() * 100;
          const angle = Math.atan2(y2 - y, x2 - x) * (180 / Math.PI);
          const distance = Math.sqrt(Math.pow(x2 - x, 2) + Math.pow(y2 - y, 2));
          
          const lineClass = `connection-line-${i}-${j}`;
          const style = document.createElement('style');
          style.textContent = `
            .${lineClass} {
              transform: rotate(${angle}deg);
            }
          `;
          document.head.appendChild(style);

          cleanupFunctionsRef.current.push(() => {
            if (document.head.contains(style)) {
              document.head.removeChild(style);
            }
          });

          lines.push(
            <motion.div
              key={`line-${i}-${j}`}
              className={`connection-line ${lineClass}`}
              style={{
                left: `${x}%`,
                top: `${y}%`,
                width: `${distance}%`,
              }}
              animate={{
                opacity: [0, 0.3, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                delay: delay + Math.random() * 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          );
        }
      }
    }

    return (
      <div className="connection-lines">
        {nodes}
        {lines}
      </div>
    );
  };

  if (!user) return null;

  return (
    <motion.div 
      className="universo-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="cockpit-overlay" />
      {renderConnectionLines()}
      
      <motion.div 
        className="holographic-display"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="terminal-container">
          <div ref={terminalRef} className="terminal" />
        </div>

        <motion.div 
          className="status-panel"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="status-header">System Status</div>
          {statusItems.map((item, index) => (
            <motion.div 
              key={index} 
              className="status-item"
              whileHover={{ scale: 1.02 }}
            >
              <div className="status-item-header">
                <div className="status-icon">{item.icon}</div>
                <div className="status-label">{item.label}</div>
                <div className="status-value">{item.value}</div>
              </div>
              <div className="status-bar">
                <motion.div 
                  className="status-bar-fill"
                  initial={{ width: 0 }}
                  animate={{ 
                    width: item.value.includes('%') ? item.value : '100%',
                  }}
                  transition={{ delay: 0.7 + (index * 0.2), duration: 1 }}
                />
              </div>
              <div className="status-actions">
                {item.actions.map((action, actionIndex) => (
                  <motion.button
                    key={actionIndex}
                    className="status-action-button"
                    onClick={action.action}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {action.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div 
        className="command-grid"
        variants={{
          hidden: { opacity: 0, y: 20 },
          show: {
            opacity: 1,
            y: 0,
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
        initial="hidden"
        animate="show"
      >
        {menuItems.map((item, index) => (
          <motion.div
            key={index}
            className="command-card"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 }
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 25px rgba(0, 255, 255, 0.3)'
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              if (item.path === "/game/:worldId/:levelId") {
                navigate("/game/1/1");
              } else {
                navigate(item.path);
              }
            }}
          >
            <div className="command-icon">{item.icon}</div>
            <div className="command-content">
              <h3 className="command-title">{item.title}</h3>
              <p className="command-description">{item.description}</p>
            </div>
            <div className="command-status-indicator" />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Universo; 