import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import useStore from './store/gameStore'
import { auth, db } from './config/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import Login from './pages/auth/Login'
import WorldSelect from './pages/game/WorldSelect'
import LevelSelect from './pages/game/LevelSelect'
import GameBoard from './pages/game/GameBoard'
import GameLayout from './layouts/GameLayout'
import StarBackground from './components/StarBackground'
import Rankings from './pages/game/Rankings'
import Profile from './pages/game/Profile'

function App() {
  const user = useStore(state => state.user)
  const setUser = useStore(state => state.setUser)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        // Buscar dados adicionais do usuário no Firestore
        const userDoc = await getDoc(doc(db, 'players', firebaseUser.uid))
        if (userDoc.exists()) {
          setUser(userDoc.data())
        }
      } else {
        setUser(null)
      }
    })

    return () => unsubscribe()
  }, [setUser])

  return (
    <BrowserRouter>
      <div className="min-h-screen relative">
        <StarBackground />
        <div className="relative z-10 min-h-screen bg-transparent">
          <Routes>
            {!user ? (
              <>
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Navigate to="/login" replace />} />
              </>
            ) : (
              <>
                <Route element={<GameLayout />}>
                  <Route path="/worlds" element={<WorldSelect />} />
                  <Route path="/levels/:worldId" element={<LevelSelect />} />
                  <Route path="/game/:worldId/:levelId" element={<GameBoard />} />
                  <Route path="/rankings" element={<Rankings />} />
                  <Route path="/game/profile" element={<Profile />} />
                  <Route path="/" element={<Navigate to="/worlds" replace />} />
                  <Route path="*" element={<Navigate to="/worlds" replace />} />
                </Route>
              </>
            )}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
