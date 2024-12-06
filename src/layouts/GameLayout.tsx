import { Link, useNavigate, Outlet, useLocation } from 'react-router-dom'
import { FaUser, FaTrophy, FaSignOutAlt, FaBrain, FaAtom } from 'react-icons/fa'
import useStore from '../store/gameStore'
import StarBackground from '../components/StarBackground'
import MusicPlayer from '../components/MusicPlayer'
import './GameLayout.css'

export default function GameLayout() {
  const navigate = useNavigate()
  const { user, logout } = useStore()
  const location = useLocation()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  const getTotalStars = () => {
    if (!user) return 0
    return user.levelProgress.reduce((acc, progress) => {
      // Garante que cada nível tenha no máximo 3 estrelas
      return acc + Math.min(progress.stars, 3)
    }, 0)
  }

  const getFirstLetterUpperCase = (username?: string) => {
    if (!username) return '?'
    return username.charAt(0).toUpperCase()
  }

  return (
    <div className="min-h-screen relative">
      <StarBackground />

      <div className="relative z-10 min-h-screen flex flex-col">
        <header className="backdrop-blur-xl border-b border-white/10 shadow-lg z-50">
          <div className="max-w-[1600px] mx-auto flex justify-between items-center px-0 py-4 w-full">
            {/* Left Section */}
            <div className="flex items-center -ml-20">
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
                        border border-cyan-500/20 rounded-xl backdrop-blur-lg bg-black/10">
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
                              backdrop-blur-lg hover:bg-black/30 hover:scale-105"
                        title="Mundos"
                      >
                        <FaBrain className="text-lg" />
                      </Link>
                    )}
                    <Link 
                      to="/game/profile" 
                      className="p-2.5 text-cyan-300 hover:text-white transition-all 
                            border border-cyan-500/20 rounded-lg hover:border-cyan-500/40
                            backdrop-blur-lg hover:bg-black/30 hover:scale-105"
                      title="Perfil"
                    >
                      <FaUser className="text-lg" />
                    </Link>
                    <Link 
                      to="/rankings" 
                      className="p-2.5 text-cyan-300 hover:text-white transition-all 
                            border border-cyan-500/20 rounded-lg hover:border-cyan-500/40
                            backdrop-blur-lg hover:bg-black/30 hover:scale-105"
                      title="Ranking"
                    >
                      <FaTrophy className="text-lg" />
                    </Link>
                    <button 
                      onClick={handleLogout}
                      className="p-2.5 text-red-400 hover:text-red-300 transition-all 
                            border border-red-500/20 rounded-lg hover:border-red-500/40
                            backdrop-blur-lg hover:bg-black/30 hover:scale-105"
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
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
