import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from './config/firebase'
import { doc, getDoc } from 'firebase/firestore'
import useStore from './store/gameStore'
import AppRoutes from './routes'
import { User } from './types/game'

function App() {
  const navigate = useNavigate()
  const location = useLocation()
  const { setUser } = useStore()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const userDoc = await getDoc(doc(db, 'players', user.uid))
          
          if (userDoc.exists()) {
            const userData = userDoc.data() as User;
            setUser(userData)
          } else {
            const newUser: User = {
              id: user.uid,
              email: user.email || '',
              username: user.displayName || '',
              name: user.displayName || '',
              createdAt: new Date().toISOString(),
              lastLoginAt: new Date().toISOString()
            }
            setUser(newUser)
          }
          // Redireciona para a página inicial apenas se estiver na página de login
          if (location.pathname === '/login') {
            navigate('/')
          }
        } catch (error) {
          console.error('Erro ao buscar dados do usuário:', error)
          setUser(null)
          navigate('/login')
        }
      } else {
        setUser(null)
        navigate('/login')
      }
    })

    return () => unsubscribe()
  }, [setUser, navigate, location.pathname])

  return <AppRoutes />
}

export default App
