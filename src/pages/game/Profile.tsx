import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaTrophy, FaStar, FaGamepad, FaGlobe } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { db } from '../../config/firebase'
import { getDoc, doc } from 'firebase/firestore'
import useStore from '../../store/gameStore'
import StarBackground from './StarBackground'
import './Profile.css'

const Profile = () => {
  const navigate = useNavigate()
  const { user } = useStore()
  const [stats, setStats] = useState({
    totalScore: 0
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user) {
      navigate('/login')
      return
    }
    fetchUserStats()
  }, [user, navigate])

  const fetchUserStats = async () => {
    try {
      setLoading(true)
      const userRef = doc(db, 'players', user?.id || '')
      const userSnap = await getDoc(userRef)
      const userData = userSnap.data()

      if (userData) {
        setStats({
          totalScore: userData.totalScore || 0
        })
      }
    } catch (error) {
      console.error('Erro ao buscar estatísticas:', error)
    } finally {
      setLoading(false)
    }
  }

  const getTotalStars = () => {
    if (!user) return 0
    return user.levelProgress?.reduce((acc, progress) => acc + Math.min(progress.stars, 3), 0) || 0
  }

  const getTotalCompletedLevels = () => {
    if (!user) return 0
    return user.levelProgress?.filter(progress => progress.stars === 3).length || 0
  }

  const getTotalStartedLevels = () => {
    if (!user) return 0
    return user.levelProgress?.filter(progress => progress.stars > 0).length || 0
  }

  const getCurrentWorld = () => {
    if (!user) return "Mundo 1"
    return `Mundo ${user.currentWorldId || "1"}`
  }

  if (loading) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="profile-container"
      >
        <StarBackground />
        <div className="profile-content flex items-center justify-center">
          <div className="loading-spinner"></div>
        </div>
      </motion.div>
    )
  }

  if (!user) return null

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="profile-container"
    >
      <StarBackground />
      
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="profile-content"
      >
        <div className="profile-header">
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="profile-title"
          >
            {user.username}
          </motion.h1>
          <motion.p 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="profile-subtitle"
          >
            {user.email}
          </motion.p>
        </div>

        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="profile-card w-full max-w-3xl"
        >
          <h2 className="card-title">
            <FaTrophy className="text-yellow-400" />
            Estatísticas
          </h2>
          <div className="space-y-4">
            <div className="stat-item">
              <span className="stat-label">Pontuação Total</span>
              <span className="stat-value">
                {stats.totalScore}
                <FaTrophy className="text-yellow-400" />
              </span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Estrelas Totais</span>
              <span className="stat-value">
                {getTotalStars()}
                <FaStar className="text-yellow-400" />
              </span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Níveis Completados</span>
              <div className="flex flex-col items-end">
                <span className="stat-value">
                  {getTotalCompletedLevels()}
                  <FaGamepad className="text-purple-400" />
                </span>
                <span className="stat-subvalue">
                  {getTotalStartedLevels()} níveis iniciados
                </span>
              </div>
            </div>
            <div className="stat-item">
              <span className="stat-label">Mundo Atual</span>
              <span className="stat-value">
                {getCurrentWorld()}
                <FaGlobe className="text-blue-400" />
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Profile
