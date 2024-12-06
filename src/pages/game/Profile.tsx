import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaTrophy, FaStar, FaGamepad, FaGlobe } from 'react-icons/fa'
import { db } from '../../config/firebase'
import { getDoc, doc } from 'firebase/firestore'
import useStore from '../../store/gameStore'
import StarBackground from '../../components/StarBackground'
import './Profile.css'

const Profile = () => {
  const navigate = useNavigate()
  const { user } = useStore()
  const [stats, setStats] = useState({
    totalScore: 0,
    achievements: [] as string[]
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    console.log('Profile mounted - User:', user, 'Loading:', loading)
    if (!user) {
      console.log('No user found, redirecting to login')
      navigate('/login')
    } else {
      console.log('User data:', user)
      fetchUserStats()
    }
  }, [user, navigate])

  const fetchUserStats = async () => {
    try {
      console.log('Fetching user stats...')
      setLoading(true)
      const userRef = doc(db, 'players', user?.id || '')
      const userSnap = await getDoc(userRef)
      const userData = userSnap.data()
      console.log('Fetched user data:', userData)

      if (userData) {
        const totalCompletedLevels = getTotalCompletedLevels()
        console.log('Total completed levels:', totalCompletedLevels)
        setStats({
          totalScore: userData.totalScore || 0,
          achievements: calculateAchievements(userData.totalScore || 0, totalCompletedLevels)
        })
      }
    } catch (error) {
      console.error('Erro ao buscar estatísticas:', error)
    } finally {
      console.log('Setting loading to false')
      setLoading(false)
    }
  }

  const calculateAchievements = (score: number, completedLevels: number) => {
    const achievements = []
    
    if (score >= 1000) achievements.push('🏆 Pontuação 1000+')
    if (score >= 5000) achievements.push('🌟 Pontuação 5000+')
    if (completedLevels >= 5) achievements.push('🚀 5 Níveis Completados')
    if (completedLevels >= 10) achievements.push('👑 10 Níveis Completados')
    
    return achievements
  }

  const getTotalStars = () => {
    if (!user) return 0
    return user.levelProgress?.reduce((acc, progress) => {
      return acc + Math.min(progress.stars, 3)
    }, 0) || 0
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
      <div className="profile-container">
        <StarBackground />
        <div className="profile-content flex items-center justify-center">
          <div className="loading-spinner"></div>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="profile-container">
      <div className="fixed inset-0 z-0">
        <StarBackground />
      </div>
      
      <div className="profile-content">
        <div className="profile-header">
          <h1 className="profile-title">{user.username}</h1>
          <p className="profile-subtitle">{user.email}</p>
        </div>

        <div className="stats-grid">
          <div className="profile-card">
            <h2 className="text-xl font-title text-game-primary mb-6 flex items-center gap-2">
              <FaTrophy className="text-yellow-400" />
              Estatísticas
            </h2>
            <div className="space-y-4">
              <div className="stat-item">
                <span className="stat-label">Pontuação Total</span>
                <span className="stat-value flex items-center gap-2">
                  {stats.totalScore}
                  <FaTrophy className="text-yellow-400" />
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Estrelas Totais</span>
                <span className="stat-value flex items-center gap-2">
                  {getTotalStars()}
                  <FaStar className="text-yellow-400" />
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Níveis Completados</span>
                <div className="flex flex-col items-end">
                  <span className="stat-value flex items-center gap-2">
                    {getTotalCompletedLevels()}
                    <FaGamepad className="text-purple-400" />
                  </span>
                  <span className="text-sm text-gray-400">
                    {getTotalStartedLevels()} níveis iniciados
                  </span>
                </div>
              </div>
              <div className="stat-item">
                <span className="stat-label">Mundo Atual</span>
                <span className="stat-value flex items-center gap-2">
                  {getCurrentWorld()}
                  <FaGlobe className="text-blue-400" />
                </span>
              </div>
            </div>
          </div>

          <div className="profile-card">
            <h2 className="text-xl font-title text-game-primary mb-6 flex items-center gap-2">
              <FaStar className="text-yellow-400" />
              Conquistas
            </h2>
            <div className="achievements-list">
              {stats.achievements.map((achievement, index) => (
                <div key={index} className="achievement-item">
                  <span className="achievement-icon">{achievement.charAt(0)}</span>
                  <span className="achievement-text">{achievement.slice(2)}</span>
                </div>
              ))}
              {stats.achievements.length === 0 && (
                <div className="achievement-item opacity-50">
                  <span className="achievement-icon">🎯</span>
                  <span className="achievement-text">Nenhuma conquista ainda...</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
