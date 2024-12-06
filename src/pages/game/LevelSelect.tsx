import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useStore from '../../store/gameStore'
import { worldLevels } from '../../config/levels'
import { Level } from '../../types/game'
import { motion } from 'framer-motion'
import { FaStar, FaLock, FaTrophy } from 'react-icons/fa'
import './LevelSelect.css'

export default function LevelSelect() {
  const navigate = useNavigate()
  const { worldId } = useParams()
  const [loading, setLoading] = useState(true)
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

    const unlocked = isLevelUnlocked(level)

    return {
      stars: progress?.stars || 0,
      completed: progress?.completed || false,
      unlocked
    }
  }

  if (!worldId || !user || !worldLevels[worldId]) {
    return <div className="text-white">Mundo não encontrado</div>
  }

  const currentWorld = worldLevels[worldId]
  const worldStats = getWorldStats()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-cyan-500"></div>
      </div>
    )
  }

  const renderStars = (count: number) => {
    return Array(3)
      .fill(0)
      .map((_, index) => (
        <span key={index} className={`star ${index < count ? '' : 'empty'}`}>
          ★
        </span>
      ))
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="level-select-container"
    >
      <div className="world-header">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h1 className="world-title">
            <span className="mr-3">{currentWorld.icon}</span>
            {currentWorld.name}
          </h1>
          <p className="world-description">{currentWorld.description}</p>
        </motion.div>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="world-stats"
        >
          <div className="stat-item">
            <FaStar className="stat-icon" />
            <div>
              <span className="stat-value">{worldStats.totalStars}</span>
              <span className="stat-label"> / {currentWorld.levels.length * 3} Estrelas</span>
            </div>
          </div>
          <div className="stat-item">
            <FaTrophy className="stat-icon" />
            <div>
              <span className="stat-value">{worldStats.completedLevels}</span>
              <span className="stat-label"> / {worldStats.totalLevels} Níveis</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="timeline-container">
        <div className="timeline-line"></div>
        {currentWorld.levels.map((level, index) => {
          const { stars, unlocked, completed } = getLevelProgress(level)
          const isLeft = index % 2 === 0

          return (
            <motion.div
              key={level.id}
              initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              className={`level-card ${isLeft ? 'left' : 'right'} ${
                !unlocked ? 'locked' : ''
              } ${completed ? 'completed' : ''}`}
              onClick={() => unlocked && navigate(`/game/${worldId}/${level.id}`)}
            >
              <div className="level-header">
                <span className="level-icon">
                  {unlocked ? level.icon : <FaLock />}
                </span>
                <div className="level-info">
                  <div className="level-number">Nível {level.id}</div>
                  <div className="level-name">{level.name}</div>
                </div>
                {unlocked && (
                  <div className="level-stars-count">
                    <FaStar className="star-icon" />
                    <span>{stars}/3</span>
                  </div>
                )}
              </div>

              <p className="level-description">
                {unlocked 
                  ? level.description 
                  : 'Complete o nível anterior para desbloquear'
                }
              </p>

              <div className="level-footer">
                <div className="level-status">
                  {unlocked ? (completed ? 'Completado' : 'Disponível') : 'Bloqueado'}
                </div>
                <div className="stars-container">
                  {renderStars(Math.min(stars, 3))}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}
