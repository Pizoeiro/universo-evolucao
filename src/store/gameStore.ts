import { create } from 'zustand'
import { User, authService, gameService } from '../config/firebase'

interface GameState {
  user: User | null
  setUser: (user: User | null) => void
  updateProgress: (worldId: string, levelId: number, stars: number, completed: boolean) => Promise<void>
  logout: () => void
}

const useStore = create<GameState>((set, get) => {
  // Configurar o listener de autenticação
  authService.onAuthStateChanged(async (firebaseUser) => {
    if (firebaseUser) {
      const userData = await gameService.getCurrentUserData(firebaseUser.uid)
      set({ user: userData })
    } else {
      set({ user: null })
    }
  })

  return {
    user: null,
    
    setUser: (user) => {
      set({ user })
    },

    updateProgress: async (worldId: string, levelId: number, stars: number, completed: boolean) => {
      const state = get()
      if (!state.user) return

      const success = await gameService.updateUserProgress(
        state.user.id,
        worldId,
        levelId,
        stars,
        completed
      )

      if (success) {
        const updatedUser = await gameService.getCurrentUserData(state.user.id)
        if (updatedUser) {
          set({ user: updatedUser })
        }
      }
    },

    logout: () => {
      authService.logout()
      set({ user: null })
    }
  }
})

export default useStore
