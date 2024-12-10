import { useEffect } from 'react'
import { Link, useNavigate, Outlet, useLocation } from 'react-router-dom'
import { FaUser, FaTrophy, FaSignOutAlt, FaBrain, FaAtom, FaMedal } from 'react-icons/fa'
import useStore from '../store/gameStore'
import StarBackground from '../components/StarBackground'
import MusicPlayer from '../components/MusicPlayer'
import { useAchievements } from '../hooks/useAchievements'
import './GameLayout.css'

export default function GameLayout() {
  const navigate = useNavigate()
  const { user, logout } = useStore()
  const location = useLocation()
  const { updateProgress } = useAchievements()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  const getTotalStars = () => {
    if (!user || !user.levelProgress) return 0
    return user.levelProgress.reduce((total, level) => total + (level.stars || 0), 0)
  }

  const getFirstLetterUpperCase = (username?: string) => {
    if (!username) return '?'
    return username.charAt(0).toUpperCase()
  }

  const handleAchievementsClick = () => {
    navigate('/achievements')
  }

  // Atualiza o tempo jogado a cada 5 minutos
  useEffect(() => {
    const timeInterval = setInterval(() => {
      updateProgress.updateTimePlayed(5);
    }, 5 * 60 * 1000); // 5 minutos em milissegundos

    return () => clearInterval(timeInterval);
  }, [updateProgress]);

  return (
    <div className="game-layout">
      <StarBackground />

      <header className="game-header">
        <div className="game-header-content">
          {/* Left Section */}
          <div className="flex items-center">
            <Link 
              to="/worlds" 
              className="flex items-center gap-3"
            >
              <FaAtom className="text-4xl text-transparent bg-clip-text 
                      bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-transparent bg-clip-text 
                        bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 
                        hover:opacity-80 transition-opacity font-['Orbitron']">
                  NEXUS
                </span>
                <span className="text-sm font-medium text-transparent bg-clip-text 
                        bg-gradient-to-r from-blue-300 to-cyan-300 
                        tracking-wider font-['Quicksand']">
                  Uma Viagem ao Conhecimento
                </span>
              </div>
            </Link>
          </div>

          {/* Center Section - Music Player */}
          <div className="flex-1 flex justify-center items-center mx-4">
            <MusicPlayer />
          </div>

          {/* Right Section */}
          <nav className="flex items-center gap-4">
            {user && (
              <>
                <div className="flex items-center gap-3 px-4 py-2 
                      border border-cyan-500/20 rounded-xl bg-black/85">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-400 to-cyan-400 
                          flex items-center justify-center text-black font-['Orbitron'] font-bold">
                      {getFirstLetterUpperCase(user.username)}
                    </div>
                    <span className="font-['Quicksand'] font-medium text-white">
                      {user.username}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg 
                        bg-gradient-to-r from-blue-500/20 to-cyan-500/20">
                    <span className="text-yellow-300">★</span>
                    <span className="font-['Orbitron'] text-white">{getTotalStars()}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {!location.pathname.startsWith('/worlds') && (
                    <Link
                      to="/worlds"
                      className="p-2.5 text-cyan-300 hover:text-white transition-all 
                            border border-cyan-500/20 rounded-lg hover:border-cyan-500/40
                            bg-black/85 hover:bg-black/95 hover:scale-105"
                      title="Mundos"
                    >
                      <FaBrain className="text-lg" />
                    </Link>
                  )}
                  <Link 
                    to="/game/profile" 
                    className="p-2.5 text-cyan-300 hover:text-white transition-all 
                          border border-cyan-500/20 rounded-lg hover:border-cyan-500/40
                          bg-black/85 hover:bg-black/95 hover:scale-105"
                    title="Perfil"
                  >
                    <FaUser className="text-lg" />
                  </Link>
                  <Link 
                    to="/rankings" 
                    className="p-2.5 text-cyan-300 hover:text-white transition-all 
                          border border-cyan-500/20 rounded-lg hover:border-cyan-500/40
                          bg-black/85 hover:bg-black/95 hover:scale-105"
                    title="Rankings"
                  >
                    <FaTrophy className="text-lg" />
                  </Link>
                  <button 
                    onClick={handleAchievementsClick}
                    className="p-2.5 text-cyan-300 hover:text-white transition-all 
                          border border-cyan-500/20 rounded-lg hover:border-cyan-500/40
                          bg-black/85 hover:bg-black/95 hover:scale-105"
                    title="Conquistas"
                  >
                    <FaMedal className="text-lg" />
                  </button>
                  <button 
                    onClick={handleLogout}
                    className="p-2.5 text-red-400 hover:text-red-300 transition-all 
                          border border-red-500/20 rounded-lg hover:border-red-500/40
                          bg-black/85 hover:bg-black/95 hover:scale-105"
                    title="Sair"
                  >
                    <FaSignOutAlt className="text-lg" />
                  </button>
                </div>
              </>
            )}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="game-main">
        <div className="min-h-full">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
