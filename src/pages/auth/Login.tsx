import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useStore from '../../store/gameStore'
import { authService } from '../../config/firebase'
import StarBackground from '../game/StarBackground'
import { FaGoogle } from 'react-icons/fa'

const Login = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const setUser = useStore(state => state.setUser)

  const handleGoogleLogin = async () => {
    setError('')
    setIsLoading(true)
    try {
      const user = await authService.loginWithGoogle()
      setUser(user)
      navigate('/worlds')
    } catch (err: any) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <StarBackground />
      </div>
      <div className="max-w-md w-full space-y-8 p-10 bg-black/30 backdrop-blur-xl rounded-2xl shadow-lg relative z-10 border border-white/10 mx-4">
        <div className="text-center">
          <div className="flex flex-col items-center gap-3">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 font-['Orbitron']">
              NEXUS
            </div>
            <div className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 tracking-wider font-['Quicksand']">
              Uma Viagem ao Conhecimento
            </div>
          </div>
          <p className="mt-6 text-sm text-gray-400">
            Entre com sua conta Google para começar sua jornada
          </p>
        </div>

        {error && (
          <div className="text-red-500 text-sm text-center">
            {error}
          </div>
        )}

        <button
          onClick={handleGoogleLogin}
          disabled={isLoading}
          className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium rounded-xl 
                   hover:from-blue-700 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 
                   disabled:opacity-50 disabled:cursor-not-allowed
                   transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200
                   shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30
                   flex items-center justify-center"
        >
          <FaGoogle className="mr-2" />
          {isLoading ? 'Entrando...' : 'Entrar com Google'}
        </button>
      </div>
    </div>
  )
}

export default Login
