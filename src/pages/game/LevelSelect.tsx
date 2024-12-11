import { useState, useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useStore from '../../store/gameStore'
import { worldLevels } from '../../config/levels'
import { Level } from '../../types/game'
import { motion, AnimatePresence } from 'framer-motion'
import { FaStar, FaLock, FaTrophy, FaPlay, FaBook, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './LevelSelect.css'

const MotionLevelCard = motion.div;
const MotionWorldHeader = motion.div;
const MotionCarouselButton = motion.button;

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

  const isWorldFullyCompleted = () => {
    if (!user || !worldId) return false;

    const worldProgress = user.levelProgress?.filter(
      progress => progress.worldId === worldId
    ) || [];

    const totalLevels = worldLevels[worldId].levels.length;
    const completedLevels = worldProgress.filter(progress => progress.completed).length;

    return completedLevels === totalLevels;
  };

  const handleFinalChapterClick = () => {
    if (isWorldFullyCompleted()) {
      navigate(`/main-quest/${worldId}/final`);
    }
  };

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
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef<NodeJS.Timeout>();

  const cardsPerPage = Math.floor((window.innerWidth - 100) / 320);
  const totalPages = Math.ceil(currentWorld.levels.length / cardsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(prev => prev + 1);
      if (carouselRef.current) {
        const newScrollLeft = (currentPage + 1) * carouselRef.current.offsetWidth;
        carouselRef.current.scrollTo({
          left: newScrollLeft,
          behavior: 'smooth'
        });
      }
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
      if (carouselRef.current) {
        const newScrollLeft = (currentPage - 1) * carouselRef.current.offsetWidth;
        carouselRef.current.scrollTo({
          left: newScrollLeft,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (carouselRef.current) {
      const totalWidth = carouselRef.current.scrollWidth;
      const containerWidth = carouselRef.current.offsetWidth;
      const maxScrollLeft = totalWidth - containerWidth;
      const scrollPosition = carouselRef.current.scrollLeft;
      const page = Math.round(scrollPosition / containerWidth);
      setCurrentPage(page);
    }
  };

  const handleWheel = (e: WheelEvent) => {
    if (carouselRef.current) {
      e.preventDefault();
      
      // Adiciona classe de rolagem suave
      if (!isScrolling) {
        setIsScrolling(true);
        carouselRef.current.classList.add('scrolling');
      }
      
      // Limpa o timeout anterior
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      
      const delta = e.deltaY || e.deltaX;
      carouselRef.current.scrollLeft += delta;
      
      // Remove a classe após a rolagem terminar
      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false);
        carouselRef.current?.classList.remove('scrolling');
        
        // Ajusta para o card mais próximo
        if (carouselRef.current) {
          const containerWidth = carouselRef.current.offsetWidth;
          const scrollPosition = carouselRef.current.scrollLeft;
          const page = Math.round(scrollPosition / containerWidth);
          
          carouselRef.current.scrollTo({
            left: page * containerWidth,
            behavior: 'smooth'
          });
          
          setCurrentPage(page);
        }
      }, 150);
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
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [isScrolling]);

  // Update cards per page on window resize
  useEffect(() => {
    const handleResize = () => {
      const newCardsPerPage = Math.floor((window.innerWidth - 100) / 320);
      const newTotalPages = Math.ceil(currentWorld.levels.length / newCardsPerPage);
      if (currentPage >= newTotalPages) {
        setCurrentPage(newTotalPages - 1);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentPage, currentWorld.levels.length]);

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

  const cardVariants = {
    hidden: (custom: number) => ({
      opacity: 0,
      y: 50,
      scale: 0.8,
      transition: { delay: custom * 0.1 }
    }),
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: custom * 0.1
      }
    }),
    hover: {
      y: -5,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.98
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.1 },
    tap: { scale: 0.95 }
  };

  return (
    <div className="level-select-container">
      <MotionWorldHeader
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        className="world-header"
        data-world-id={worldId}
      >
        <div className="world-header-content">
          <div className="world-left">
            <motion.div 
              className="world-icon"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {currentWorld.icon}
            </motion.div>
            
            <div className="world-info">
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
            </div>
          </div>

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
                <span className="stat-label">/ {currentWorld.levels.length * 3}</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <FaTrophy />
              </div>
              <div className="stat-content">
                <span className="stat-value">{worldStats.completedLevels}</span>
                <span className="stat-label">/ {worldStats.totalLevels}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </MotionWorldHeader>

      {/* Final Chapter Button */}
      {worldId && (
        <motion.button
          className={`final-chapter-button ${isWorldFullyCompleted() ? 'unlocked' : 'locked'}`}
          onClick={handleFinalChapterClick}
          disabled={!isWorldFullyCompleted()}
          whileHover={isWorldFullyCompleted() ? { scale: 1.05 } : {}}
          whileTap={isWorldFullyCompleted() ? { scale: 0.95 } : {}}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {isWorldFullyCompleted() ? 'Capítulo Final' : 'Desbloquear Capítulo Final'}
        </motion.button>
      )}

      <div className="level-carousel-container">
        <MotionCarouselButton
          variants={buttonVariants}
          initial="rest"
          whileHover="hover"
          whileTap="tap"
          className="carousel-button prev"
          onClick={handlePrev}
          disabled={currentPage === 0}
        >
          <FaChevronLeft />
        </MotionCarouselButton>

        <div
          ref={carouselRef}
          className="level-carousel"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <AnimatePresence mode="wait">
            {currentWorld.levels.map((level, index) => {
              const { stars, unlocked, completed } = getLevelProgress(level)
              return (
                <MotionLevelCard
                  key={level.id}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  whileHover={unlocked ? "hover" : undefined}
                  whileTap={unlocked ? "tap" : undefined}
                  className={`level-card ${!unlocked ? 'locked' : ''} ${
                    completed ? 'completed' : ''
                  }`}
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
                        className={`level-button story ${!unlocked ? 'disabled' : ''}`}
                        disabled={!unlocked}
                        onClick={() => handleMainQuestClick(level)}
                      >
                        <span>Capítulo {level.id}</span>
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
                </MotionLevelCard>
              )
            })}
          </AnimatePresence>
        </div>

        <MotionCarouselButton
          variants={buttonVariants}
          initial="rest"
          whileHover="hover"
          whileTap="tap"
          className="carousel-button next"
          onClick={handleNext}
          disabled={currentPage === totalPages - 1}
        >
          <FaChevronRight />
        </MotionCarouselButton>
      </div>

      <div className="carousel-dots">
        {Array.from({ length: totalPages }).map((_, index) => (
          <motion.div
            key={index}
            className={`carousel-dot ${currentPage === index ? 'active' : ''}`}
            onClick={() => {
              setCurrentPage(index)
              if (carouselRef.current) {
                carouselRef.current.scrollTo({
                  left: index * carouselRef.current.offsetWidth,
                  behavior: 'smooth'
                })
              }
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </div>
  )
}
