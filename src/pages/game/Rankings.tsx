import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaTrophy, FaMedal, FaStar, FaChevronDown } from 'react-icons/fa'
import useStore from '../../store/gameStore'
import { gameService } from '../../config/firebase'
import { worldLevels } from '../../config/levels'
import StarBackground from '../../components/StarBackground'
import './Rankings.css'

export default function Rankings() {
  const navigate = useNavigate()
  const { user } = useStore()
  const [rankings, setRankings] = useState<User[]>([])
  const [selectedWorld, setSelectedWorld] = useState("1")
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showWorldMenu, setShowWorldMenu] = useState(false)

  useEffect(() => {
    if (!user) {
      navigate('/login')
      return
    }

    const fetchRankings = async () => {
      try {
        const rankingsData = await gameService.getRankings()
        setRankings(rankingsData)
        setError(null)
      } catch (error) {
        console.error('Erro ao buscar rankings:', error)
        setError('Não foi possível carregar o ranking. Tente novamente.')
      } finally {
        setIsLoading(false)
      }
    }

    fetchRankings()
  }, [user, navigate])

  const getRankIcon = (index: number) => {
    switch (index) {
      case 0:
        return <FaTrophy className="text-yellow-400 text-3xl" />
      case 1:
        return <FaMedal className="text-gray-300 text-2xl" />
      case 2:
        return <FaMedal className="text-amber-700 text-2xl" />
      default:
        return <span className="text-gray-400 text-xl font-bold">{index + 1}</span>
    }
  }

  const getPlayerStats = (player: User) => {
    const worldProgress = player.levelProgress?.filter(
      progress => progress.worldId === selectedWorld
    ) || [];

    const worldStars = worldProgress.reduce((acc, progress) => acc + progress.stars, 0);
    const completedLevels = worldProgress.filter(progress => progress.completed).length;
    const totalLevels = worldLevels[selectedWorld]?.levels.length || 0;
    const maxStarsPerLevel = 3;
    const maxPossibleStars = totalLevels * maxStarsPerLevel;
    const totalPlayerStars = player.levelProgress?.reduce((acc, progress) => acc + progress.stars, 0) || 0;

    return {
      worldStars,
      totalPlayerStars,
      completedLevels,
      totalLevels,
      maxPossibleStars,
      progressPercentage: Math.round((worldStars / maxPossibleStars) * 100)
    };
  };

  const getWorldRankings = () => {
    return rankings
      .map(player => ({
        ...player,
        stats: getPlayerStats(player)
      }))
      .sort((a, b) => b.stats.worldStars - a.stats.worldStars);
  };

  const toggleWorldMenu = () => {
    setShowWorldMenu(!showWorldMenu)
  }

  const selectWorld = (world: string) => {
    setSelectedWorld(world)
    setShowWorldMenu(false)
  }

  const renderStars = (count: number, max: number = 3) => {
    return Array(max)
      .fill(0)
      .map((_, index) => (
        <span 
          key={index} 
          className={`text-xl ${index < count ? 'text-yellow-400' : 'text-gray-600'}`}
        >
          ★
        </span>
      ));
  };

  const getWorldInfo = (worldId: string) => {
    const world = worldLevels[worldId];
    return {
      name: world.name,
      icon: world.icon
    };
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Erro</h2>
          <p className="text-red-400">{error}</p>
        </div>
      </div>
    )
  }

  const currentWorld = worldLevels[selectedWorld];
  const worldRankings = getWorldRankings();

  return (
    <div className="rankings-container">
      <StarBackground />
      <div className="rankings-content">
        <div className="world-header">
          <h1 className="world-title">
            <span className="world-icon">{getWorldInfo(selectedWorld).icon}</span>
            <span className="world-name">{getWorldInfo(selectedWorld).name}</span>
          </h1>
          
          <p className="world-description text-center max-w-2xl">
            {currentWorld?.description || "Veja quem são os melhores jogadores deste mundo!"}
          </p>

          <div className="stats-container">
            <div className="flex gap-8 items-center justify-center bg-black/20 rounded-lg px-6 py-3">
              <div className="stat-item">
                <FaStar className="stat-icon" />
                <span>Estrelas Disponíveis: {worldRankings[0]?.stats.maxPossibleStars || 0}</span>
              </div>
              <div className="stat-item">
                <FaTrophy className="stat-icon" />
                <span>Jogadores: {worldRankings.length}</span>
              </div>
            </div>
          </div>

          <div className="world-selector">
            <button 
              className="world-select-button"
              onClick={toggleWorldMenu}
            >
              Selecionar Mundo <FaChevronDown className={`world-select-icon ${showWorldMenu ? 'rotated' : ''}`} />
            </button>
            
            {showWorldMenu && (
              <div className="world-menu">
                {Object.keys(worldLevels).map((world) => (
                  <button
                    key={world}
                    className={`world-menu-item ${selectedWorld === world ? 'active' : ''}`}
                    onClick={() => selectWorld(world)}
                  >
                    {getWorldInfo(world).icon} {getWorldInfo(world).name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="rankings-list">
          {worldRankings.map((player, index) => (
            <div
              key={player.id}
              className={`ranking-card ${player.id === user?.id ? 'current-user' : ''}`}
            >
              <div className="ranking-position">
                {getRankIcon(index)}
              </div>
              <div className="ranking-content">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-semibold">{player.username}</h3>
                    <p className="text-sm text-gray-400">
                      Total de Estrelas: {player.stats.totalPlayerStars}
                    </p>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex items-center gap-2 mb-1">
                      {renderStars(player.stats.worldStars)}
                    </div>
                    <span className="text-sm text-gray-400">
                      {player.stats.worldStars}/{player.stats.maxPossibleStars} estrelas
                    </span>
                  </div>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{ width: `${player.stats.progressPercentage}%` }}
                  />
                  <span className="progress-text">
                    {player.stats.completedLevels}/{player.stats.totalLevels} níveis completados
                  </span>
                </div>
              </div>
            </div>
          ))}
          {worldRankings.length === 0 && (
            <div className="empty-rankings">
              <p>Nenhum jogador encontrado no ranking deste mundo.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
