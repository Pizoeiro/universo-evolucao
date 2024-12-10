import { create } from 'zustand'
import { User } from '../types/game'
import { auth } from '../config/firebase'
import { signOut } from 'firebase/auth'

interface GameStore {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => Promise<void>;
}

const useStore = create<GameStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: async () => {
    try {
      await signOut(auth)
      set({ user: null })
    } catch (error) {
      console.error('Erro ao fazer logout:', error)
    }
  }
}))

export default useStore
