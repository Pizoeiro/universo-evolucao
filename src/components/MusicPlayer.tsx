import React, { useState, useRef, useEffect } from 'react'
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaMusic } from 'react-icons/fa'

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.5)
  const [isMuted, setIsMuted] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)
  const [showControls, setShowControls] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    // Configurar volume inicial
    audio.volume = volume
    
    // Carregar estado do áudio do localStorage
    const savedVolume = localStorage.getItem('musicVolume')
    const savedMuted = localStorage.getItem('musicMuted')
    const savedPlaying = localStorage.getItem('musicPlaying')
    
    if (savedVolume) setVolume(parseFloat(savedVolume))
    if (savedMuted) setIsMuted(savedMuted === 'true')
    if (savedPlaying) setIsPlaying(savedPlaying === 'true')

    // Configurar autoplay se necessário
    if (savedPlaying === 'true') {
      const playPromise = audio.play()
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay foi bloqueado
          setIsPlaying(false)
        })
      }
    }
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    // Salvar estado no localStorage
    localStorage.setItem('musicVolume', volume.toString())
    localStorage.setItem('musicMuted', isMuted.toString())
    localStorage.setItem('musicPlaying', isPlaying.toString())

    // Aplicar volume e mute
    audio.volume = isMuted ? 0 : volume
  }, [volume, isMuted, isPlaying])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (newVolume > 0) {
      setIsMuted(false)
    }
  }

  return (
    <div 
      className={`relative transition-all duration-300 ${
        showControls ? 'w-64' : 'w-10'
      }`}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <div className="flex items-center gap-3">
        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          className="relative p-2.5 text-cyan-300 hover:text-white transition-all 
                   border border-cyan-500/20 rounded-lg hover:border-cyan-500/40
                   backdrop-blur-lg hover:bg-black/30 hover:scale-105 group"
          title={isPlaying ? "Pausar" : "Tocar"}
        >
          <div className="relative z-10">
            {isPlaying ? <FaPause className="text-lg" /> : <FaPlay className="text-lg" />}
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 
                        rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>

        {/* Volume Controls */}
        <div className={`flex items-center gap-2 transition-all duration-300 ${
          showControls ? 'opacity-100 w-48' : 'opacity-0 w-0 overflow-hidden'
        }`}>
          <button
            onClick={toggleMute}
            className="relative p-2.5 text-cyan-300 hover:text-white transition-all 
                     border border-cyan-500/20 rounded-lg hover:border-cyan-500/40
                     backdrop-blur-lg hover:bg-black/30 hover:scale-105 group"
            title={isMuted ? "Ativar Som" : "Silenciar"}
          >
            <div className="relative z-10">
              {isMuted || volume === 0 ? 
                <FaVolumeMute className="text-lg" /> : 
                <FaVolumeUp className="text-lg" />
              }
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 
                          rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
          
          <div className="flex-1 px-2">
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="w-full h-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 
                       rounded-lg appearance-none cursor-pointer
                       [&::-webkit-slider-thumb]:appearance-none
                       [&::-webkit-slider-thumb]:w-3
                       [&::-webkit-slider-thumb]:h-3
                       [&::-webkit-slider-thumb]:rounded-full
                       [&::-webkit-slider-thumb]:bg-gradient-to-r
                       [&::-webkit-slider-thumb]:from-blue-400
                       [&::-webkit-slider-thumb]:to-cyan-400
                       hover:[&::-webkit-slider-thumb]:from-blue-300
                       hover:[&::-webkit-slider-thumb]:to-cyan-300"
            />
          </div>
        </div>

        <audio
          ref={audioRef}
          loop
          src="/music/Musica espacial Relaxante _ Nebulosa vermelha.mp3"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
      </div>
    </div>
  )
}

export default MusicPlayer
