import { useEffect, useRef } from 'react'

const StarBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const frameCountRef = useRef(0)
  const contextRef = useRef<CanvasRenderingContext2D | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', {
      alpha: false,
      desynchronized: true,
      willReadFrequently: false
    })
    if (!ctx) return

    contextRef.current = ctx

    // Configuração inicial
    const resizeCanvas = () => {
      if (!canvas || !ctx) return

      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      
      ctx.scale(dpr, dpr)
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Classes base para elementos cósmicos
    abstract class CosmicObject {
      protected ctx: CanvasRenderingContext2D
      protected canvas: HTMLCanvasElement

      constructor() {
        const ctx = contextRef.current
        const canvas = canvasRef.current
        if (!ctx || !canvas) throw new Error('Context or canvas not initialized')
        this.ctx = ctx
        this.canvas = canvas
      }

      abstract update(): void
      abstract draw(): void
    }

    // Configurações
    const stars: Star[] = []
    const nebulae: Nebula[] = []
    const blackHoles: BlackHole[] = []
    const galaxies: Galaxy[] = []
    const comets: Comet[] = []

    const numStars = Math.min(200, Math.floor((canvas.width * canvas.height) / 10000))
    const numNebulae = 3
    const numBlackHoles = 1
    const numGalaxies = 2
    const numComets = 3

    const baseColor = [0, 188, 212] // RGB do cyan tema

    // Classes dos elementos cósmicos
    class Star extends CosmicObject {
      private x: number = 0
      private y: number = 0
      private size: number = 0
      private speed: number = 0
      private brightness: number = 0
      private angle: number = 0
      private phase: number = 0

      constructor() {
        super()
        this.x = Math.random() * this.canvas.width
        this.y = Math.random() * this.canvas.height
        this.size = Math.random() * 1.5 + 0.5
        this.speed = Math.random() * 0.05 + 0.01
        this.brightness = Math.random() * 0.5 + 0.5
        this.angle = Math.random() * Math.PI * 2
        this.phase = Math.random() * Math.PI * 2
      }

      update() {
        this.angle += this.speed * 0.01
        this.phase += this.speed * 0.02
        
        const noise = Math.sin(this.phase) * 0.3
        this.x += Math.cos(this.angle) * (this.speed + noise)
        this.y += Math.sin(this.angle) * (this.speed + noise)

        if (this.x < 0) this.x = this.canvas.width
        if (this.x > this.canvas.width) this.x = 0
        if (this.y < 0) this.y = this.canvas.height
        if (this.y > this.canvas.height) this.y = 0

        this.brightness = 0.5 + Math.sin(this.phase) * 0.2
      }

      draw() {
        const gradient = this.ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size * 2
        )
        
        const intensity = this.brightness * (0.7 + Math.sin(frameCountRef.current * 0.01) * 0.3)
        gradient.addColorStop(0, `rgba(255, 255, 255, ${intensity})`)
        gradient.addColorStop(0.1, `rgba(${baseColor.join(',')}, ${intensity * 0.3})`)
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')

        this.ctx.fillStyle = gradient
        this.ctx.beginPath()
        this.ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2)
        this.ctx.fill()
      }
    }

    class Nebula extends CosmicObject {
      private x: number = 0
      private y: number = 0
      private size: number = 0
      private angle: number = 0
      private speed: number = 0
      private phase: number = 0
      private noiseScale: number = 0

      constructor() {
        super()
        this.x = Math.random() * this.canvas.width
        this.y = Math.random() * this.canvas.height
        this.size = Math.random() * 200 + 100
        this.angle = Math.random() * Math.PI * 2
        this.speed = Math.random() * 0.0001
        this.phase = Math.random() * Math.PI * 2
        this.noiseScale = Math.random() * 0.5 + 0.5
      }

      update() {
        this.phase += 0.001
        this.angle += this.speed
        
        const noise = Math.sin(this.phase) * this.noiseScale
        this.x += Math.cos(this.angle) * (0.1 + noise * 0.05)
        this.y += Math.sin(this.angle) * (0.1 + noise * 0.05)
      }

      draw() {
        const gradient = this.ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size * (1 + Math.sin(this.phase) * 0.1)
        )

        const [r, g, b] = baseColor
        const intensity = 0.1 + Math.sin(this.phase) * 0.05
        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${intensity})`)
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')

        this.ctx.fillStyle = gradient
        this.ctx.beginPath()
        this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        this.ctx.fill()
      }
    }

    class BlackHole extends CosmicObject {
      private x: number = 0
      private y: number = 0
      private size: number = 0
      private rotation: number = 0
      private accretionDiskSize: number = 0
      private phase: number = 0

      constructor() {
        super()
        this.x = this.canvas.width * (0.3 + Math.random() * 0.4)
        this.y = this.canvas.height * (0.3 + Math.random() * 0.4)
        this.size = 30
        this.rotation = 0
        this.accretionDiskSize = this.size * 4
        this.phase = Math.random() * Math.PI * 2
      }

      update() {
        this.rotation += 0.02
        this.phase += 0.01
      }

      draw() {
        const pulseSize = this.accretionDiskSize * (1 + Math.sin(this.phase) * 0.1)
        
        // Disco de acreção com efeito pulsante
        const gradient = this.ctx.createRadialGradient(
          this.x, this.y, this.size,
          this.x, this.y, pulseSize
        )
        
        const intensity = 0.3 + Math.sin(this.phase) * 0.1
        gradient.addColorStop(0, 'rgba(0, 0, 0, 1)')
        gradient.addColorStop(0.3, `rgba(${baseColor.join(',')}, ${intensity})`)
        gradient.addColorStop(0.6, `rgba(255, 100, 100, ${intensity * 0.7})`)
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')

        this.ctx.save()
        this.ctx.translate(this.x, this.y)
        this.ctx.rotate(this.rotation)
        this.ctx.translate(-this.x, -this.y)

        this.ctx.fillStyle = gradient
        this.ctx.beginPath()
        this.ctx.ellipse(this.x, this.y, pulseSize, pulseSize * 0.3, 0, 0, Math.PI * 2)
        this.ctx.fill()
        this.ctx.restore()

        // Buraco negro central com borda brilhante
        const holeGradient = this.ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size * (1 + Math.sin(this.phase) * 0.05)
        )
        
        const edgeIntensity = 0.3 + Math.sin(this.phase * 2) * 0.1
        holeGradient.addColorStop(0, 'rgba(0, 0, 0, 1)')
        holeGradient.addColorStop(0.7, 'rgba(0, 0, 0, 1)')
        holeGradient.addColorStop(1, `rgba(${baseColor.join(',')}, ${edgeIntensity})`)

        this.ctx.fillStyle = holeGradient
        this.ctx.beginPath()
        this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        this.ctx.fill()
      }
    }

    class Galaxy extends CosmicObject {
      private x: number = 0
      private y: number = 0
      private size: number = 0
      private rotation: number = 0
      private arms: number = 0
      private phase: number = 0
      private density: number = 0

      constructor() {
        super()
        this.x = Math.random() * this.canvas.width
        this.y = Math.random() * this.canvas.height
        this.size = Math.random() * 100 + 50
        this.rotation = 0
        this.arms = 3 + Math.floor(Math.random() * 3)
        this.phase = Math.random() * Math.PI * 2
        this.density = Math.random() * 0.3 + 0.7
      }

      update() {
        this.rotation += 0.001
        this.phase += 0.002
      }

      draw() {
        this.ctx.save()
        this.ctx.translate(this.x, this.y)
        this.ctx.rotate(this.rotation)

        const pulseSize = this.size * (1 + Math.sin(this.phase) * 0.1)
        
        for (let arm = 0; arm < this.arms; arm++) {
          const angle = (arm * Math.PI * 2) / this.arms
          this.ctx.save()
          this.ctx.rotate(angle)

          this.ctx.beginPath()
          this.ctx.moveTo(0, 0)
          
          for (let i = 0; i < pulseSize; i += 2) {
            const x = i
            const wavePhase = i * 0.05 + this.phase
            const y = Math.sin(wavePhase) * (i * 0.2)
            const alpha = (1 - (i / pulseSize)) * this.density
            const intensity = alpha * (0.1 + Math.sin(this.phase + i * 0.01) * 0.05)
            
            this.ctx.fillStyle = `rgba(${baseColor.join(',')}, ${intensity})`
            this.ctx.fillRect(x, y, 2, 2)
          }
          
          this.ctx.restore()
        }

        this.ctx.restore()
      }
    }

    class Comet extends CosmicObject {
      private x: number = 0
      private y: number = 0
      private speed: number = 0
      private angle: number = 0
      private tailLength: number = 0
      private size: number = 0
      private phase: number = 0

      constructor() {
        super()
        this.size = 2 + Math.random() * 2
        this.phase = Math.random() * Math.PI * 2
        this.reset()
      }

      reset() {
        const side = Math.floor(Math.random() * 4)
        switch(side) {
          case 0: // top
            this.x = Math.random() * this.canvas.width
            this.y = -50
            break
          case 1: // right
            this.x = this.canvas.width + 50
            this.y = Math.random() * this.canvas.height
            break
          case 2: // bottom
            this.x = Math.random() * this.canvas.width
            this.y = this.canvas.height + 50
            break
          case 3: // left
          default:
            this.x = -50
            this.y = Math.random() * this.canvas.height
            break
        }
        
        this.speed = 2 + Math.random() * 4
        this.angle = Math.atan2(
          this.canvas.height/2 - this.y,
          this.canvas.width/2 - this.x
        )
        this.tailLength = 50 + Math.random() * 50
      }

      update() {
        this.phase += 0.1
        this.x += Math.cos(this.angle) * this.speed
        this.y += Math.sin(this.angle) * this.speed

        if (this.x < -100 || this.x > this.canvas.width + 100 ||
            this.y < -100 || this.y > this.canvas.height + 100) {
          this.reset()
        }
      }

      draw() {
        const pulseSize = this.size * (1 + Math.sin(this.phase) * 0.2)
        
        // Cauda do cometa com efeito pulsante
        const gradient = this.ctx.createLinearGradient(
          this.x, this.y,
          this.x - Math.cos(this.angle) * this.tailLength,
          this.y - Math.sin(this.angle) * this.tailLength
        )
        
        const tailIntensity = 0.3 + Math.sin(this.phase) * 0.1
        gradient.addColorStop(0, `rgba(${baseColor.join(',')}, ${tailIntensity})`)
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')

        this.ctx.beginPath()
        this.ctx.strokeStyle = gradient
        this.ctx.lineWidth = pulseSize
        this.ctx.moveTo(this.x, this.y)
        this.ctx.lineTo(
          this.x - Math.cos(this.angle) * this.tailLength,
          this.y - Math.sin(this.angle) * this.tailLength
        )
        this.ctx.stroke()

        // Núcleo do cometa com brilho pulsante
        const headGradient = this.ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, pulseSize * 2
        )
        
        const coreIntensity = 0.8 + Math.sin(this.phase) * 0.2
        headGradient.addColorStop(0, `rgba(255, 255, 255, ${coreIntensity})`)
        headGradient.addColorStop(0.3, `rgba(${baseColor.join(',')}, ${coreIntensity * 0.6})`)
        headGradient.addColorStop(1, 'rgba(0, 0, 0, 0)')

        this.ctx.fillStyle = headGradient
        this.ctx.beginPath()
        this.ctx.arc(this.x, this.y, pulseSize * 2, 0, Math.PI * 2)
        this.ctx.fill()
      }
    }

    // Inicialização dos elementos
    try {
      for (let i = 0; i < numStars; i++) stars.push(new Star())
      for (let i = 0; i < numNebulae; i++) nebulae.push(new Nebula())
      for (let i = 0; i < numBlackHoles; i++) blackHoles.push(new BlackHole())
      for (let i = 0; i < numGalaxies; i++) galaxies.push(new Galaxy())
      for (let i = 0; i < numComets; i++) comets.push(new Comet())
    } catch (error) {
      console.error('Failed to initialize cosmic objects:', error)
      return
    }

    // Loop de animação
    let animationFrameId: number

    const animate = () => {
      if (!ctx) return

      frameCountRef.current++
      
      // Clear com fade para criar rastros
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Atualiza e desenha todos os elementos em ordem de profundidade
      nebulae.forEach(nebula => {
        nebula.update()
        nebula.draw()
      })

      galaxies.forEach(galaxy => {
        galaxy.update()
        galaxy.draw()
      })

      blackHoles.forEach(blackHole => {
        blackHole.update()
        blackHole.draw()
      })

      stars.forEach(star => {
        star.update()
        star.draw()
      })

      comets.forEach(comet => {
        comet.update()
        comet.draw()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        background: 'radial-gradient(circle at center, #000B1E, #000510)',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        imageRendering: 'pixelated'
      }}
    />
  )
}

export default StarBackground
