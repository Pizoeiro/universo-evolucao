import { create } from 'zustand'
import { User } from '../types/game'
import { auth } from '../config/firebase'
import { signOut } from 'firebase/auth'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../config/firebase'

interface GameStore {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => Promise<void>;
  updateSpaceShooterProgress: (progress: { levelId: number; completed: boolean; highScore: number }) => Promise<void>;
}

const useStore = create<GameStore>((set, get) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: async () => {
    try {
      await signOut(auth)
      set({ user: null })
    } catch (error) {
      console.error('Erro ao fazer logout:', error)
    }
  },
  updateSpaceShooterProgress: async (progress) => {
    const { user } = get();
    if (!user) return;

    try {
      const userRef = doc(db, 'users', user.id);
      const currentProgress = user.spaceShooterProgress || [];
      
      // Find existing level progress
      const levelIndex = currentProgress.findIndex(p => p.levelId === progress.levelId);
      
      let newProgress;
      if (levelIndex === -1) {
        // Add new level progress
        newProgress = [...currentProgress, progress];
      } else {
        // Update existing level progress
        newProgress = currentProgress.map((p, index) => 
          index === levelIndex ? 
            { ...p, 
              completed: progress.completed,
              highScore: Math.max(p.highScore || 0, progress.highScore)
            } : p
        );
      }

      // Update Firestore
      await updateDoc(userRef, {
        spaceShooterProgress: newProgress
      });

      // Update local state
      set({
        user: {
          ...user,
          spaceShooterProgress: newProgress
        }
      });
    } catch (error) {
      console.error('Error updating space shooter progress:', error);
    }
  }
}))

export default useStore
