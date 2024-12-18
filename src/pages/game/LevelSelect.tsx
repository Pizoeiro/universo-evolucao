import { useState, useEffect, useRef, Fragment } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useStore from '../../store/gameStore'
import { worldLevels } from '../../data/levels'
import { Level } from '../../types/game'
import { motion, AnimatePresence } from 'framer-motion'
import { FaLock, FaTrophy, FaPlay, FaBook, FaChevronLeft, FaChevronRight, FaStar, FaAtom } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, FreeMode, Mousewheel, Virtual } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/free-mode'
import './LevelSelect.css'

const MotionLevelCard = motion.div;
const MotionWorldHeader = motion.div;
const MotionCarouselButton = motion.button;

interface ExtremeLevelCardProps {
  level: Level
  worldId: string
  onPlay: (level: Level) => void
  isUnlocked: boolean
  progress?: LevelProgress
}

const ExtremeLevelCard: React.FC<ExtremeLevelCardProps> = ({
  level,
  worldId,
  onPlay,
  isUnlocked,
  progress
}) => {
  const stars = progress?.score || 0;

  // Função para pegar o emoji objetivo da fase
  const getLevelEmoji = (level: Level) => {
    const starObjective = level.starObjectives.one; // Pegamos o primeiro objetivo
    return starObjective.emoji;
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <MotionLevelCard
      className={`extreme-level-card ${!isUnlocked ? 'locked' : ''}`}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      whileHover={isUnlocked ? { scale: 1.02 } : {}}
      whileTap={isUnlocked ? { scale: 0.98 } : {}}
    >
      <div className="level-content">
        <div className="level-header">
          <div className="level-icon">
            {isUnlocked ? getLevelEmoji(level) : <FaLock />}
          </div>
          <div className="level-info">
            <div className="level-number">Nível {level.id}</div>
            <h3 className="level-name">{level.name}</h3>
          </div>
        </div>

        <p className="level-description">{level.description}</p>

        <div className="level-footer">
          <div className="stars-row">
            {[1, 2, 3].map((star) => (
              <FaStar
                key={star}
                className={`star-icon ${star <= stars ? 'earned' : ''}`}
              />
            ))}
          </div>

          <div className="level-actions">
            {isUnlocked ? (
              <button
                className="level-button play-button"
                onClick={() => onPlay(level)}
                aria-label={`Jogar nível extremo ${level.id}`}
              >
                <FaPlay /> JOGAR
              </button>
            ) : (
              <button 
                className="level-button play-button" 
                disabled
                aria-label="Nível bloqueado"
              >
                <FaLock /> BLOQUEADO
              </button>
            )}
          </div>
        </div>
      </div>
    </MotionLevelCard>
  );
};

const FragmentoConhecimento: React.FC<{ 
  fragmento: { titulo: string, conteudo: string },
  isUnlocked: boolean
}> = ({ fragmento, isUnlocked }) => {
  return (
    <motion.div 
      className="fragmento-conhecimento"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className={`fragmento-conteudo ${!isUnlocked ? 'locked' : ''}`}
        whileHover={isUnlocked ? { scale: 1.15 } : {}}
        whileTap={isUnlocked ? { scale: 0.95 } : {}}
      >
        {isUnlocked ? (
          <FaAtom className="fragmento-icone" />
        ) : (
          <FaLock className="fragmento-icone locked" />
        )}
        <h4 className="fragmento-titulo">{fragmento.titulo}</h4>
        <p className="fragmento-texto">{fragmento.conteudo}</p>
      </motion.div>
      
      {isUnlocked && (
        <div className="fragmento-popup">
          <h4 className="fragmento-titulo">{fragmento.titulo}</h4>
          <p className="fragmento-texto">{fragmento.conteudo}</p>
        </div>
      )}
    </motion.div>
  );
};

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
    if (!user || !worldId) return false;

    // Verificar se é um nível extremo
    const isExtreme = extremeWorld?.levels.includes(level);
    const effectiveWorldId = isExtreme ? `${worldId}-extreme` : worldId;

    // Se for nível extremo, verificar se o modo extremo está desbloqueado
    if (isExtreme && !isExtremeUnlocked()) return false;

    if (level.id === 1) return true;

    const worldProgress = user.levelProgress?.filter(
      progress => progress.worldId === effectiveWorldId
    ) || [];

    const previousLevelCompleted = worldProgress.some(
      progress => progress.levelId === level.id - 1 && progress.completed
    );

    return previousLevelCompleted;
  };

  const getLevelProgress = (level: Level) => {
    if (!user || !worldId) return { 
      score: 0, 
      unlocked: false, 
      completed: false 
    };

    // Determinar se o nível é extremo
    const isExtreme = extremeWorld?.levels.includes(level);
    const effectiveWorldId = isExtreme ? `${worldId}-extreme` : worldId;

    const progress = user.levelProgress?.find(
      p => p.worldId === effectiveWorldId && p.levelId === level.id
    );

    const unlocked = isLevelUnlocked(level);

    return {
      score: progress?.stars || 0,
      completed: progress?.completed || false,
      unlocked
    };
  };

  const handlePlayClick = (level: Level, source: 'match') => {
    const { unlocked } = getLevelProgress(level)
    if (!unlocked) return;

    setSelectedLevel(level.id);
    setTimeout(() => {
      // Se for um nível extremo, use o worldId do extremo
      const targetWorldId = extremeWorld?.levels.includes(level) ? extremeWorldId : worldId;
      navigate(`/game/${targetWorldId}/${level.id}`);
    }, 500);
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

  const currentWorld = worldLevels[worldId];
  const extremeWorldId = `${worldId}-extreme`;
  const extremeWorld = worldLevels[extremeWorldId];

  const isExtremeUnlocked = () => {
    if (!user || !worldId) return false;

    const worldProgress = user.levelProgress?.filter(
      progress => progress.worldId === worldId
    ) || [];

    const totalStars = worldProgress.reduce((acc, curr) => acc + (curr.stars || 0), 0);
    const minStarsRequired = currentWorld.levels.length * 2; // 2 estrelas por nível

    return totalStars >= minStarsRequired;
  };

  const getWorldStats = () => {
    if (!user || !worldId) return { 
      totalStars: 0, 
      completedLevels: 0, 
      totalLevels: 0,
      extremeTotalStars: 0,
      extremeCompletedLevels: 0,
      extremeTotalLevels: 0
    };

    // Progresso do mundo normal
    const worldProgress = user.levelProgress?.filter(
      progress => progress.worldId === worldId
    ) || [];

    const totalLevels = currentWorld.levels.length;
    const completedLevels = worldProgress.filter(progress => progress.completed).length;
    const totalStars = worldProgress.reduce((acc, curr) => acc + (curr.stars || 0), 0);

    // Progresso do mundo extremo
    const extremeWorldProgress = user.levelProgress?.filter(
      progress => progress.worldId === `${worldId}-extreme`
    ) || [];

    const extremeTotalLevels = extremeWorld?.levels.length || 0;
    const extremeCompletedLevels = extremeWorldProgress.filter(progress => progress.completed).length;
    const extremeTotalStars = extremeWorldProgress.reduce((acc, curr) => acc + (curr.stars || 0), 0);

    return {
      totalStars,
      completedLevels,
      totalLevels,
      extremeTotalStars,
      extremeCompletedLevels,
      extremeTotalLevels
    };
  };

  const worldStats = getWorldStats();

  const [matchCurrentPage, setMatchCurrentPage] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const matchCarouselRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef<NodeJS.Timeout>();

  const [cardsPerPage, setCardsPerPage] = useState(Math.floor((window.innerWidth - 100) / 320));
  const matchTotalPages = Math.ceil(currentWorld.levels.length / cardsPerPage);

  useEffect(() => {
    const handleResize = () => {
      setCardsPerPage(Math.floor((window.innerWidth - 100) / 320));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = () => {
    if (matchCurrentPage < matchTotalPages - 1) {
      setMatchCurrentPage(prev => prev + 1);
      if (matchCarouselRef.current) {
        const newScrollLeft = (matchCurrentPage + 1) * matchCarouselRef.current.offsetWidth;
        matchCarouselRef.current.scrollTo({
          left: newScrollLeft,
          behavior: 'smooth'
        });
      }
    }
  };

  const handlePrev = () => {
    if (matchCurrentPage > 0) {
      setMatchCurrentPage(prev => prev - 1);
      if (matchCarouselRef.current) {
        const newScrollLeft = (matchCurrentPage - 1) * matchCarouselRef.current.offsetWidth;
        matchCarouselRef.current.scrollTo({
          left: newScrollLeft,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (matchCarouselRef.current?.offsetLeft || 0));
    setScrollLeft(matchCarouselRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (matchCarouselRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (matchCarouselRef.current) {
      matchCarouselRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (matchCarouselRef.current) {
      const totalWidth = matchCarouselRef.current.scrollWidth;
      const containerWidth = matchCarouselRef.current.offsetWidth;
      const maxScrollLeft = totalWidth - containerWidth;
      const scrollPosition = matchCarouselRef.current.scrollLeft;
      const page = Math.round(scrollPosition / containerWidth);
      setMatchCurrentPage(page);
    }
  };

  const handleWheel = (e: WheelEvent) => {
    if (matchCarouselRef.current) {
      const totalWidth = matchCarouselRef.current.scrollWidth;
      const containerWidth = matchCarouselRef.current.offsetWidth;
      const maxScrollLeft = totalWidth - containerWidth;
      const scrollPosition = matchCarouselRef.current.scrollLeft;
      const page = Math.round(scrollPosition / containerWidth);
      setMatchCurrentPage(page);
    }
  };

  useEffect(() => {
    const carousel = matchCarouselRef.current;
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

  const renderMatchLevelCard = (level: Level) => {
    const { score: stars, completed, unlocked } = getLevelProgress(level);

    return (
      <MotionLevelCard
        key={level.id}
        className={`level-card ${completed ? 'completed' : ''} ${
          unlocked ? 'unlocked' : 'locked'
        }`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        whileHover={{ y: -5 }}
      >
        <div className="level-header">
          <div className="level-icon">
            {unlocked ? (
              completed ? (
                <FaTrophy style={{ color: '#ffd700', filter: 'drop-shadow(0 0 5px rgba(255, 215, 0, 0.5))' }} />
              ) : (
                <span className="level-emoji">{level.icon}</span>
              )
            ) : (
              <FaLock style={{ color: 'rgba(255, 0, 0, 0.6)' }} />
            )}
          </div>
          <div className="level-info">
            <div className="level-number">Nível {level.id}</div>
            <h3 className="level-name">{level.name}</h3>
          </div>
        </div>

        <p className="level-description">{level.description}</p>

        <div className="level-footer">
          <div className="level-status">
            <div className="level-stars-count">
              {Array.from({ length: 3 }).map((_, i) => (
                <FaStar
                  key={i}
                  className={i < (stars || 0) ? 'text-yellow-400' : 'empty'}
                  style={i < (stars || 0) ? {
                    animation: `starPulse ${2 + i * 0.2}s ease-in-out infinite`
                  } : {}}
                />
              ))}
            </div>
          </div>
          {unlocked && (
            <div className="level-actions">
              <button
                onClick={() => handlePlayClick(level, 'match')}
                className="level-button"
              >
                <FaPlay className="mr-2" />
                JOGAR
              </button>
              <button
                onClick={() => handleMainQuestClick(level)}
                className="level-button story"
              >
                <FaBook className="mr-2" />
                QUEST
              </button>
            </div>
          )}
        </div>
      </MotionLevelCard>
    );
  };

  const renderMatchLevelCards = () => {
    return currentWorld.levels.map((level, index) => (
      <Fragment key={level.id}>
        {renderMatchLevelCard(level)}
        {level.fragmentoConhecimento && (
          <FragmentoConhecimento 
            fragmento={level.fragmentoConhecimento} 
            isUnlocked={isLevelUnlocked(level)}
          />
        )}
      </Fragment>
    ));
  };

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
    tap: { scale: 0.9 }
  };

  return (
    <div className="level-select-container">
      <motion.div
        className="world-header"
        data-world-id={worldId}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="world-header-content">
          <div className="world-left">
            <div className="world-icon">{currentWorld.icon}</div>
            <div className="world-info">
              <h1 className="world-title">{currentWorld.name}</h1>
              <p className="world-description">{currentWorld.description}</p>
            </div>
          </div>
          <div className="world-stats-container">
            <div className="stat-card">
              <FaStar className="stat-icon normal-star" />
              <div className="stat-content">
                <span className="stat-value">{worldStats.totalStars}</span>
                <span className="stat-label">/ {worldStats.totalLevels * 3}</span>
              </div>
            </div>
            {extremeWorld && (
              <div className="stat-card">
                <FaStar className="stat-icon extreme-star" />
                <div className="stat-content">
                  <span className="stat-value">{worldStats.extremeTotalStars}</span>
                  <span className="stat-label">/ {worldStats.extremeTotalLevels * 3}</span>
                </div>
              </div>
            )}
            <div className="stat-card">
              <FaTrophy className="stat-icon" />
              <div className="stat-content">
                <span className="stat-value">{worldStats.completedLevels + worldStats.extremeCompletedLevels}</span>
                <span className="stat-label">/ {worldStats.totalLevels + worldStats.extremeTotalLevels}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

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

      {/* Seção dos níveis originais */}
      <div className="level-section-divider">
        <h2 className="section-title">Rede Neural π - Match Game</h2>
        <p className="section-description">Complete os desafios e ganhe estrelas!</p>
      </div>

      <div className="level-carousel-container match-game">
        <MotionCarouselButton
          className="carousel-button prev"
          onClick={handlePrev}
          disabled={matchCurrentPage === 0}
          initial={{ opacity: 0 }}
          animate={{ opacity: matchCurrentPage > 0 ? 1 : 0 }}
        >
          <FaChevronLeft />
        </MotionCarouselButton>

        <div
          ref={matchCarouselRef}
          className="level-carousel"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {renderMatchLevelCards()}
        </div>

        <MotionCarouselButton
          className="carousel-button next"
          onClick={handleNext}
          disabled={matchCurrentPage === matchTotalPages - 1}
          initial={{ opacity: 0 }}
          animate={{ opacity: matchCurrentPage < matchTotalPages - 1 ? 1 : 0 }}
        >
          <FaChevronRight />
        </MotionCarouselButton>
      </div>

      {/* Seção do Modo Extremo */}
      {extremeWorld && (
        <div className="extreme-mode-section">
          <h2 className="extreme-mode-header">Modo Extremo</h2>
          
          {isExtremeUnlocked() ? (
            <div className="level-carousel-container space-shooter">
              <Swiper
                modules={[Navigation, FreeMode, Mousewheel, Virtual]}
                slidesPerView={2}
                spaceBetween={20}
                navigation={true}
                freeMode={{
                  enabled: true,
                  momentum: true,
                  momentumRatio: 0.8,
                }}
                mousewheel={{
                  forceToAxis: true,
                  sensitivity: 1,
                  thresholdDelta: 50
                }}
                virtual
                grabCursor={true}
                centeredSlides={false}
                className="extreme-swiper"
                breakpoints={{
                  480: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 25,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 25,
                  },
                  1440: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                  }
                }}
              >
                {extremeWorld.levels.map((level) => (
                  <SwiperSlide key={`extreme-${level.id}`}>
                    <ExtremeLevelCard
                      level={level}
                      worldId={extremeWorldId}
                      onPlay={handlePlayClick}
                      isUnlocked={isLevelUnlocked(level)}
                      progress={getLevelProgress(level)}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ) : (
            <motion.div 
              className="extreme-mode-lock-message"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="extreme-mode-lock-content">
                <FaLock className="extreme-mode-lock-icon" />
                <h3 className="extreme-mode-lock-title">Modo Extremo Bloqueado</h3>
                <p className="extreme-mode-lock-description">
                  Complete os níveis do modo normal com pelo menos 2 estrelas para desbloquear 
                  desafios ainda mais intensos no Modo Extremo!
                </p>
                
                {/* Barra de Progresso */}
                <div className="extreme-mode-progress">
                  <div className="extreme-mode-progress-bar">
                    <motion.div 
                      className="extreme-mode-progress-fill"
                      initial={{ width: 0 }}
                      animate={{ 
                        width: `${(worldStats.totalStars / (worldStats.totalLevels * 2)) * 100}%` 
                      }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                  <span className="extreme-mode-progress-text">
                    {worldStats.totalStars}/{worldStats.totalLevels * 2} estrelas
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
}
