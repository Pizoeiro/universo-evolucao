import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useStore from '../../store/gameStore'
import { worldLevels } from '../../config/levels'
import { motion } from 'framer-motion';
import './WorldSelect.css'

export default function WorldSelect() {
  const navigate = useNavigate()
  const { user } = useStore()

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user, navigate])

  const getWorldProgress = (worldId: string) => {
    if (!user) return { totalStars: 0, completedLevels: 0, totalLevels: worldLevels[worldId].levels.length }

    const worldProgress = user.levelProgress?.filter(
      progress => progress.worldId === worldId
    ) || []

    return {
      totalStars: worldProgress.reduce((acc, progress) => acc + progress.stars, 0),
      completedLevels: worldProgress.filter(progress => progress.completed).length,
      totalLevels: worldLevels[worldId].levels.length
    }
  }

  const isWorldUnlocked = (worldId: string): boolean => {
    if (worldId === "1") return true
    if (!user) return false

    const previousWorldId = String(Number(worldId) - 1)
    const previousWorldProgress = user.levelProgress?.filter(
      progress => progress.worldId === previousWorldId
    ) || []

    // Mundo é desbloqueado se pelo menos 50% dos níveis do mundo anterior estiverem completos
    const previousWorldLevels = worldLevels[previousWorldId].levels.length
    const completedLevels = previousWorldProgress.filter(progress => progress.completed).length
    
    return completedLevels >= Math.ceil(previousWorldLevels * 0.5)
  }

  const getTotalStars = () => {
    return Object.keys(worldLevels).reduce((acc, worldId) => {
      const progress = getWorldProgress(worldId)
      return acc + progress.totalStars
    }, 0)
  }

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-full h-screen overflow-hidden bg-black flex"
    >
      {/* Background com estrelas */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-purple-900/20 to-transparent" />
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`
            }}
          />
        ))}
      </div>

      {/* Painel de Informações à Esquerda */}
      <motion.div 
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="relative z-10 w-[25vw] min-w-[300px] h-screen p-[1.5vh] control-panel"
      >
        <div className="text-white h-full flex flex-col">
          {/* Cabeçalho */}
          <div className="mb-[3vh] scanner-effect">
            <motion.h1 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-[2vh] holographic-text text-transparent bg-clip-text 
                    bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400"
            >
              CENTRAL DE
            </motion.h1>
            <motion.h1 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-[2.5vh] holographic-text text-transparent bg-clip-text 
                    bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400"
            >
              CONTROLE ESPACIAL
            </motion.h1>
          </div>

          {/* Status do Jogador */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mb-[3vh] p-[2vh] rounded-lg bg-black/30 border border-cyan-500/20"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="holographic-text text-cyan-400">Total de Estrelas</span>
              <span className="text-[2vh] font-bold text-yellow-400">{getTotalStars()}</span>
            </div>
          </motion.div>

          {/* Lista de Mundos */}
          <div className="flex-1 overflow-y-auto pr-2 space-y-[2vh] custom-scrollbar">
            {Object.entries(worldLevels).map(([worldId, world]) => {
              const progress = getWorldProgress(worldId)
              const unlocked = isWorldUnlocked(worldId)
              
              return (
                <motion.div
                  key={worldId}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + Number(worldId) * 0.1, duration: 0.5 }}
                  className={`p-[2vh] rounded-lg border ${
                    unlocked 
                      ? 'bg-black/40 border-cyan-500/30 hover:border-cyan-400/50 cursor-pointer transform hover:scale-[1.02] transition-all'
                      : 'bg-black/20 border-gray-700/30 cursor-not-allowed'
                  }`}
                  onClick={() => unlocked && navigate(`/levels/${worldId}`)}
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center space-x-2">
                      <span className={`text-[2vh] ${unlocked ? 'text-cyan-400' : 'text-gray-500'}`}>
                        {world.icon}
                      </span>
                      <div className="flex flex-col">
                        <h3 className={`holographic-text text-[1.8vh] ${unlocked ? 'text-cyan-400' : 'text-gray-500'}`}>
                          Mundo {worldId}
                        </h3>
                        <span className={`text-[1.4vh] ${unlocked ? 'text-gray-300' : 'text-gray-600'}`}>
                          {world.name}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`text-[1.5vh] ${unlocked ? 'text-yellow-400' : 'text-gray-600'}`}>
                        {progress.totalStars}
                      </span>
                      <span className={unlocked ? 'text-yellow-400' : 'text-gray-600'}>★</span>
                    </div>
                  </div>
                  
                  <div className="relative h-[0.8vh] bg-black/50 rounded-full overflow-hidden">
                    <div
                      className={`absolute h-full rounded-full ${
                        unlocked ? 'bg-gradient-to-r from-cyan-500 to-blue-500' : 'bg-gray-700'
                      }`}
                      style={{
                        width: `${(progress.completedLevels / progress.totalLevels) * 100}%`,
                      }}
                    />
                  </div>
                  
                  <div className="mt-2 text-[1.4vh] flex justify-between">
                    <span className={unlocked ? 'text-gray-300' : 'text-gray-600'}>
                      {progress.completedLevels}/{progress.totalLevels} níveis
                    </span>
                    {!unlocked && (
                      <span className="text-gray-500">
                        Bloqueado
                      </span>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.div>

      {/* Container do Sistema Solar */}
      <div className="relative flex-1 flex items-center justify-center">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="solar-system"
        >
          {/* Sol */}
          <motion.div 
            className="sun-container"
          >
            <motion.div 
              className="sun nexus-sun" 
              data-total-stars={getTotalStars()}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ 
                type: "spring",
                stiffness: 400,
                damping: 10
              }}
              style={{ 
                transformOrigin: "center center",
                margin: 0 
              }}
            >
              <motion.div 
                className="star-tooltip"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                Total de Estrelas: {getTotalStars()}
              </motion.div>
              <motion.div 
                className="text-center text-white text-lg font-orbitron"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.8, 1, 0.8] 
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                NEXUS
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Órbitas e Planetas */}
          {Object.keys(worldLevels).map((worldId, index) => {
            const isUnlocked = isWorldUnlocked(worldId)
            const { totalStars, completedLevels, totalLevels } = getWorldProgress(worldId)
            const orbitRadius = 80 + (index * 45)
            const orbitDuration = 20 + (index * 5)
            const progressPercent = (completedLevels / totalLevels) * 100
            const circumference = 2 * Math.PI * 20
            const dashOffset = circumference - (progressPercent / 100) * circumference

            // Cores para cada mundo no estilo Nexus
            const worldColors = {
              '1': '#00bcd4', // Ciano
              '2': '#03a9f4', // Azul claro
              '3': '#2196f3', // Azul
              '4': '#3f51b5', // Índigo
              '5': '#1976d2', // Azul escuro
              '6': '#0288d1', // Azul médio
              '7': '#0097a7', // Ciano escuro
              '8': '#00838f', // Ciano mais escuro
              '9': '#006064'  // Ciano profundo
            }

            return (
              <div key={worldId}>
                {/* Órbita visível */}
                <motion.div
                  className="orbit-path"
                  style={{
                    width: `${orbitRadius * 2}px`,
                    height: `${orbitRadius * 2}px`,
                    left: '50%',
                    top: '50%'
                  }}
                  animate={{
                    boxShadow: isUnlocked 
                      ? ['0 0 20px rgba(0, 188, 212, 0.1)', '0 0 30px rgba(0, 188, 212, 0.2)', '0 0 20px rgba(0, 188, 212, 0.1)']
                      : '0 0 20px rgba(0, 188, 212, 0.1)'
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Planeta */}
                <motion.div 
                  whileHover={{ 
                    scale: isUnlocked ? 1.2 : 1.1,
                    rotate: isUnlocked ? [0, 5, -5, 0] : 0 
                  }}
                  whileTap={{ scale: isUnlocked ? 0.95 : 1 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 300,
                    rotate: {
                      duration: 0.5,
                      repeat: 0
                    }
                  }}
                  className={`orbit ${!isUnlocked ? 'locked' : ''}`}
                  style={{
                    animation: `orbit ${orbitDuration}s linear infinite`,
                    '--orbit-radius': `${orbitRadius}px`
                  } as React.CSSProperties}
                >
                  <motion.div 
                    className={`planet ${!isUnlocked ? 'locked' : ''}`}
                    onClick={() => isUnlocked && navigate(`/levels/${worldId}`)}
                    animate={isUnlocked ? {
                      y: [0, -3, 0],
                    } : {}}
                    transition={isUnlocked ? {
                      y: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    } : {}}
                    style={{
                      cursor: isUnlocked ? 'pointer' : 'not-allowed'
                    }}
                  >
                    {/* Anel de Progresso */}
                    <svg className="progress-ring" viewBox="0 0 44 44">
                      <circle
                        stroke={isUnlocked ? worldColors[worldId as keyof typeof worldColors] : "#666"}
                        strokeWidth="2"
                        fill="none"
                        r="20"
                        cx="22"
                        cy="22"
                        style={{
                          strokeDasharray: `${circumference} ${circumference}`,
                          strokeDashoffset: isUnlocked ? dashOffset : circumference
                        }}
                      />
                    </svg>

                    {/* Planeta Visual */}
                    <div
                      className="absolute inset-0 rounded-full flex items-center justify-center"
                      style={{
                        background: isUnlocked
                          ? `radial-gradient(circle at 30% 30%, ${worldColors[worldId as keyof typeof worldColors]}, ${worldColors[worldId as keyof typeof worldColors]}88)`
                          : 'radial-gradient(circle at 30% 30%, #666, #444)'
                      }}
                    >
                      <span className="text-xl">{worldLevels[worldId].icon}</span>
                    </div>

                    {/* Card de Informação */}
                    <div className="info-card">
                      <h3 className="text-lg font-bold text-white mb-2">{worldLevels[worldId].name}</h3>
                      {isUnlocked ? (
                        <>
                          <p className="text-sm text-gray-300 mb-2">{worldLevels[worldId].description}</p>
                          <div className="flex justify-between text-sm">
                            <span>Níveis: {completedLevels}/{totalLevels}</span>
                            <span>⭐ {totalStars}/{totalLevels * 3}</span>
                          </div>
                        </>
                      ) : (
                        <p className="text-sm text-gray-400">
                          Complete o mundo anterior para desbloquear
                        </p>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </motion.div>
  )
}
