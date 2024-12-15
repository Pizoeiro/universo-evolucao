import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useStore from '../../store/gameStore'
import { worldLevels } from '../../data/levels'
import { motion } from 'framer-motion'
import './WorldSelect.css'
import { FaStar, FaTrophy } from 'react-icons/fa'
import { FaArrowUp } from 'react-icons/fa'
import StarBackground from './StarBackground'

// Importando as imagens dos mundos
import Mundo1 from '../../assets/Mundos/Mundo1.png'
import Mundo2 from '../../assets/Mundos/Mundo2.png'
import Mundo3 from '../../assets/Mundos/Mundo3.png'
import Mundo4 from '../../assets/Mundos/Mundo4.png'
import Mundo5 from '../../assets/Mundos/Mundo5.png'
import Mundo6 from '../../assets/Mundos/Mundo6.png'
import Mundo7 from '../../assets/Mundos/Mundo7.png'
import Mundo8 from '../../assets/Mundos/Mundo8.png'
import Mundo9 from '../../assets/Mundos/Mundo9.png'
import Mundo10 from '../../assets/Mundos/Mundo10.png'

const worldImages = {
  '1': Mundo1,
  '2': Mundo2,
  '3': Mundo3,
  '4': Mundo4,
  '5': Mundo5,
  '6': Mundo6,
  '7': Mundo7,
  '8': Mundo8,
  '9': Mundo9,
  '10': Mundo10,
}

export default function WorldSelect() {
  const navigate = useNavigate()
  const { user } = useStore()
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user, navigate])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const getWorldProgress = (worldId: string) => {
    const world = worldLevels[worldId]
    if (!world || !user) return { completedLevels: 0, totalLevels: 0, totalStars: 0 }

    const worldProgress = user.levelProgress?.filter(
      progress => progress.worldId === worldId
    ) || []

    return {
      completedLevels: worldProgress.filter(progress => progress.completed).length,
      totalLevels: world.levels.length,
      totalStars: worldProgress.reduce((acc, progress) => acc + progress.stars, 0)
    }
  }

  const isWorldUnlocked = (worldId: string) => {
    // Mundo 1 sempre está desbloqueado
    if (worldId === '1') return true

    // Para os outros mundos, verifica se o mundo anterior está completo
    const previousWorldId = String(Number(worldId) - 1)
    const previousProgress = getWorldProgress(previousWorldId)
    
    // Mundo é desbloqueado se o anterior tiver pelo menos 1 nível completo
    return previousProgress.completedLevels > 0
  }

  return (
    <>
      <div className="cosmic-network">
        <StarBackground />
        <div className="timeline-title-container">
          <h1 className="timeline-title">Rede Neural π</h1>
        </div>

        <div className="timeline"></div>
        
        <div className="world-nodes">
          {Object.entries(worldLevels).map(([worldId, world], index) => {
            const progress = getWorldProgress(worldId)
            const unlocked = isWorldUnlocked(worldId)
            const isEven = index % 2 === 0
            
            return (
              <motion.div
                key={worldId}
                className={`world-node ${unlocked ? 'unlocked' : 'locked'} ${isEven ? 'even' : 'odd'}`}
                onClick={() => unlocked && navigate(`/levels/${worldId}`)}
                initial={{ opacity: 0, scale: 0.8, y: 100 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: [0.4, 0, 0.2, 1]
                }}
                whileHover={{
                  scale: 1,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div 
                  className="world-node-inner"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: index * 0.2 + 0.2,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                />
                
                <motion.div 
                  className="world-info-connector"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2 + 0.4
                  }}
                />

                <motion.div
                  className="world-info-panel"
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.2 + 0.5,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                >
                  <div className="world-image-container">
                    <motion.img
                      src={worldImages[worldId as keyof typeof worldImages]}
                      alt={`Mundo ${worldId}`}
                      className="world-image"
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        duration: 1,
                        delay: index * 0.2 + 0.6
                      }}
                    />
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.2 + 0.7
                    }}
                  >
                    <div className="world-number">Mundo {worldId}</div>
                    <h2 className="world-title">{world.name}</h2>
                    <p className="world-description">{world.description}</p>
                    <div className="world-stats">
                      <div className="world-stat">
                        <FaStar className="world-stat-icon" />
                        <span>{progress.totalStars}</span>
                      </div>
                      <div className="world-stat">
                        <FaTrophy className="world-stat-icon" />
                        <span>{progress.completedLevels}/{progress.totalLevels}</span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {showScrollTop && (
        <motion.button 
          className="scroll-top-button"
          onClick={scrollToTop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <FaArrowUp />
        </motion.button>
      )}
    </>
  )
}
