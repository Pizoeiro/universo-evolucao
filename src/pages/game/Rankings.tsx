import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaTrophy, FaMedal, FaStar, FaChevronDown } from 'react-icons/fa'
import { motion } from 'framer-motion'
import useStore from '../../store/gameStore'
import { gameService } from '../../config/firebase'
import { worldLevels } from '../../data/levels'
import StarBackground from './StarBackground'
import './Rankings.css'

export default function Rankings() {
  const navigate = useNavigate()
  const { user } = useStore()
  const [rankings, setRankings] = useState<User[]>([])
  const [selectedWorld, setSelectedWorld] = useState("all")
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

  const getPlayerStats = (player: User) => {
    if (selectedWorld === "all") {
      const totalPlayerStars = player.levelProgress?.reduce((acc, progress) => acc + progress.stars, 0) || 0;
      const totalCompletedLevels = player.levelProgress?.filter(progress => progress.completed).length || 0;
      const totalLevels = Object.values(worldLevels).reduce((acc, world) => acc + world.levels.length, 0);
      const maxPossibleStars = totalLevels * 3;

      return {
        stars: totalPlayerStars,
        completedLevels: totalCompletedLevels,
        totalLevels,
        maxPossibleStars,
        progressPercentage: Math.round((totalPlayerStars / maxPossibleStars) * 100)
      };
    }

    const worldProgress = player.levelProgress?.filter(
      progress => progress.worldId === selectedWorld
    ) || [];

    const worldStars = worldProgress.reduce((acc, progress) => acc + progress.stars, 0);
    const completedLevels = worldProgress.filter(progress => progress.completed).length;
    const totalLevels = worldLevels[selectedWorld]?.levels.length || 0;
    const maxPossibleStars = totalLevels * 3;

    return {
      stars: worldStars,
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
      .sort((a, b) => b.stats.stars - a.stats.stars);
  };

  const toggleWorldMenu = () => {
    setShowWorldMenu(!showWorldMenu)
  }

  const selectWorld = (world: string) => {
    setSelectedWorld(world)
    setShowWorldMenu(false)
  }

  const getWorldInfo = (worldId: string) => {
    if (worldId === "all") {
      return {
        name: "Ranking Universal",
        icon: "🪐",
        description: "Classificação geral com base no total de estrelas em todos os mundos"
      };
    }
    return {
      name: worldLevels[worldId]?.name || `Mundo ${worldId}`,
      icon: worldLevels[worldId]?.icon || "🌍",
      description: worldLevels[worldId]?.description || "Veja quem são os melhores jogadores deste mundo!"
    };
  };

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

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="rankings-container"
    >
      <StarBackground />

      {/* Painel de Seleção de Mundo */}
      <motion.div 
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="world-selector"
      >
        <div className="text-white h-full flex flex-col">
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-[2vh] font-bold text-transparent bg-clip-text 
                  bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400"
          >
            RANKING
          </motion.h1>
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-[2.5vh] font-bold text-transparent bg-clip-text 
                  bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400"
          >
            {getWorldInfo(selectedWorld).name}
          </motion.h1>

          <div className="mt-8 space-y-4">
            {/* Botão do Ranking Universal */}
            <button
              onClick={() => selectWorld("all")}
              className="world-select-button w-full flex items-center justify-between px-4 py-2 text-white rounded-lg bg-opacity-20 hover:bg-opacity-30 transition-all"
            >
              <div className="flex items-center gap-2">
                <span className="text-xl">🪐</span>
                <span>Ranking Universal</span>
              </div>
            </button>

            {/* Menu dos Mundos */}
            <div className="relative">
              <button
                onClick={toggleWorldMenu}
                className="world-select-button w-full flex items-center justify-between px-4 py-2 text-white rounded-lg bg-opacity-20 hover:bg-opacity-30 transition-all"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">🌍</span>
                  <span>Mundos</span>
                </div>
                <FaChevronDown className={`transform transition-transform ${showWorldMenu ? 'rotate-180' : ''}`} />
              </button>

              {showWorldMenu && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="world-menu"
                >
                  {Object.entries(worldLevels).map(([id, world]) => (
                    <button
                      key={id}
                      onClick={() => selectWorld(id)}
                      className="world-menu-item flex items-center gap-2"
                    >
                      <span className="text-xl">{world.icon}</span>
                      <span>{world.name}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Conteúdo do Ranking */}
      <motion.div 
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="rankings-content"
      >
        <div className="rankings-header">
          <h2 className="text-2xl font-bold mb-4">{getWorldInfo(selectedWorld).name}</h2>
          <p className="text-gray-300">{getWorldInfo(selectedWorld).description}</p>
          
          {/* Stats do Mundo */}
          <div className="rankings-stats mt-6">
            <div className="stat-item">
              <FaStar className="text-yellow-400" />
              <span>Estrelas Disponíveis: {getWorldRankings()[0]?.stats.maxPossibleStars || 0}</span>
            </div>
            <div className="stat-item">
              <FaTrophy className="text-cyan-400" />
              <span>Jogadores: {rankings.length}</span>
            </div>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-full">
            <div className="text-white">Carregando rankings...</div>
          </div>
        ) : error ? (
          <div className="text-red-500 text-center">{error}</div>
        ) : (
          <div className="rankings-list">
            {getWorldRankings().map((player, index) => (
              <motion.div
                key={player.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`ranking-card ${player.id === user?.id ? 'current-user' : ''}`}
              >
                <div className="flex items-center gap-4">
                  <div className="ranking-position">
                    {getRankIcon(index)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-semibold text-white">{player.username}</h3>
                        <p className="text-sm text-gray-400">
                          {selectedWorld === "all" ? "Total de Estrelas" : "Estrelas neste Mundo"}: {player.stats.stars}
                        </p>
                      </div>
                      <div className="flex flex-col items-end">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm text-gray-400">
                            {player.stats.stars}/{player.stats.maxPossibleStars} estrelas
                          </span>
                        </div>
                        <span className="text-sm text-gray-400">
                          {player.stats.completedLevels}/{player.stats.totalLevels} níveis completados
                        </span>
                      </div>
                    </div>
                    <div className="progress-bar">
                      <div 
                        className="progress-fill"
                        style={{ width: `${player.stats.progressPercentage}%` }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}
