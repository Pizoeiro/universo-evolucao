import { useState, useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useStore from '../../store/gameStore'
import { worldLevels } from '../../config/levels'
import { Level } from '../../types/game'
import { motion, AnimatePresence } from 'framer-motion'
import { FaStar, FaLock, FaTrophy, FaPlay, FaBook, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './LevelSelect.css'

export default function LevelSelect() {
  const navigate = useNavigate()
  const { worldId } = useParams()
  const [loading, setLoading] = useState(true)
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null)
  const { user } = useStore()

  useEffect(() => {
    if (!user) {
      navigate('/login')
    } else {
      setLoading(false)
    }
  }, [user, navigate])

  const isLevelUnlocked = (level: Level): boolean => {
    if (!user || !worldId) return false
    if (level.id === 1) return true

    const worldProgress = user.levelProgress?.filter(
      progress => progress.worldId === worldId
    ) || []

    const previousLevelCompleted = worldProgress.some(
      progress => progress.levelId === level.id - 1 && progress.completed
    )

    return previousLevelCompleted
  }

  const getWorldStats = () => {
    if (!user || !worldId) return { totalStars: 0, completedLevels: 0, totalLevels: 0 }

    const worldProgress = user.levelProgress?.filter(
      progress => progress.worldId === worldId
    ) || []

    return {
      totalStars: worldProgress.reduce((acc, progress) => {
        return acc + Math.min(progress.stars, 3)
      }, 0),
      completedLevels: worldProgress.filter(progress => progress.completed).length,
      totalLevels: worldLevels[worldId].levels.length
    }
  }

  const getLevelProgress = (level: Level) => {
    if (!user || !worldId) return { stars: 0, unlocked: false, completed: false }

    const progress = user.levelProgress?.find(
      p => p.worldId === worldId && p.levelId === level.id
    )

    console.log('User Progress:', {
      user: user.username,
      worldId,
      levelId: level.id,
      progress,
      levelProgress: user.levelProgress
    })

    const unlocked = isLevelUnlocked(level)

    const result = {
      stars: progress?.stars || 0,
      completed: progress?.completed || false,
      unlocked
    }

    console.log('Level Progress Result:', result)
    return result
  }

  const handlePlayClick = (level: Level) => {
    const { unlocked } = getLevelProgress(level)
    if (!unlocked) return

    setSelectedLevel(level.id)
    setTimeout(() => {
      navigate(`/game/${worldId}/${level.id}`)
    }, 500)
  }

  const handleMainQuestClick = (level: Level) => {
    if (!worldId) return
    navigate(`/main-quest/${worldId}/${level.id}`)
  }

  const handleBackClick = () => {
    navigate('/worlds')
  }

  if (!worldId || !user || !worldLevels[worldId]) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <h2 className="text-2xl">Mundo não encontrado</h2>
      </div>
    )
  }

  const currentWorld = worldLevels[worldId]
  const worldStats = getWorldStats()

  const [currentPage, setCurrentPage] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const cardsPerPage = 5;
  const totalPages = Math.ceil(currentWorld.levels.length / cardsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(prev => prev + 1);
      if (carouselRef.current) {
        carouselRef.current.style.transform = `translateX(-${(currentPage + 1) * 100}%)`;
      }
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
      if (carouselRef.current) {
        carouselRef.current.style.transform = `translateX(-${(currentPage - 1) * 100}%)`;
      }
    }
  };

  const handleWheel = (e: WheelEvent) => {
    if (carouselRef.current) {
      e.preventDefault();
      carouselRef.current.scrollLeft += e.deltaY;
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('wheel', handleWheel, { passive: false });
    }
    return () => {
      if (carousel) {
        carousel.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          animate={{
            rotate: 360,
            transition: {
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="w-16 h-16 border-t-2 border-b-2 border-cyan-500 rounded-full"
        />
      </div>
    )
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="level-select-container"
    >
      <motion.div
        className="world-header"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="world-header-content">
          <motion.div 
            className="world-icon"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {currentWorld.icon}
          </motion.div>
          
          <motion.h1 
            className="world-title"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {currentWorld.name}
          </motion.h1>

          <motion.p 
            className="world-description"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {currentWorld.description}
          </motion.p>

          <motion.div 
            className="world-stats-container"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className="stat-card">
              <div className="stat-icon">
                <FaStar />
              </div>
              <div className="stat-content">
                <span className="stat-value">{worldStats.totalStars}</span>
                <span className="stat-label">/ {currentWorld.levels.length * 3} Estrelas</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <FaTrophy />
              </div>
              <div className="stat-content">
                <span className="stat-value">{worldStats.completedLevels}</span>
                <span className="stat-label">/ {worldStats.totalLevels} Níveis</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="level-carousel-container">
        <div className="carousel-controls">
          <button 
            className="carousel-button"
            onClick={handlePrev}
            disabled={currentPage === 0}
          >
            <FaChevronLeft />
          </button>
          <button 
            className="carousel-button"
            onClick={handleNext}
            disabled={currentPage === totalPages - 1}
          >
            <FaChevronRight />
          </button>
        </div>

        <div className="level-carousel" ref={carouselRef}>
          {currentWorld.levels.map((level, index) => {
            const { stars, unlocked, completed } = getLevelProgress(level)
            console.log(`Level ${level.id} - Stars: ${stars}, Unlocked: ${unlocked}, Completed: ${completed}`)
            
            return (
              <motion.div
                key={level.id}
                className={`level-card ${!unlocked ? 'locked' : ''} ${
                  completed ? 'completed' : ''
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="level-left">
                  <div className="level-header">
                    <div className="level-icon">
                      {unlocked ? level.icon : <FaLock />}
                    </div>
                    <div className="level-info">
                      <div className="level-number">Nível {level.id}</div>
                      <div className="level-name">{level.name}</div>
                    </div>
                  </div>
                  
                  <p className="level-description">
                    {unlocked ? level.description : 'Complete o nível anterior para desbloquear'}
                  </p>
                </div>

                <div className="level-right">
                  <div className="level-footer">
                    <div className="level-status">
                      {unlocked ? (completed ? 'Completado' : 'Disponível') : 'Bloqueado'}
                    </div>
                    <div className="level-stars-count">
                      <div className="stars-container">
                        {Array.from({ length: 3 }).map((_, i) => (
                          <FaStar
                            key={i}
                            className={i < stars ? '' : 'empty'}
                            size={14}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="level-actions">
                    <button
                      className={`level-button ${!unlocked ? 'disabled' : ''}`}
                      disabled={!unlocked}
                      onClick={() => handleMainQuestClick(level)}
                    >
                      <FaBook />
                      <span>História Principal</span>
                    </button>
                    <button
                      className={`level-button primary ${!unlocked ? 'disabled' : ''}`}
                      disabled={!unlocked}
                      onClick={() => handlePlayClick(level)}
                    >
                      <FaPlay />
                      <span>Jogar Nível</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}
