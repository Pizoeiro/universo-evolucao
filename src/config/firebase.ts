import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { 
  getAuth, 
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  User as FirebaseUser
} from 'firebase/auth';
import { 
  getFirestore, 
  collection, 
  doc, 
  setDoc, 
  getDoc,
  getDocs,
  query,
  orderBy,
  limit,
  updateDoc} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkrrpq5dp88EabcJV8GG-rs-kcPbxnBE0",
  authDomain: "universo-59c81.firebaseapp.com",
  projectId: "universo-59c81",
  storageBucket: "universo-59c81.firebasestorage.app",
  
  messagingSenderId: "1094111140174",
  appId: "1:1094111140174:web:c110678162c20ad808e61f",
  measurementId: "G-SNKPEV05BS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

// Tipos (mantidos os mesmos do PocketBase para compatibilidade)
export interface User {
  id: string;
  username: string;
  name: string;
  email: string;
  currentLevel: number;
  totalScore: number;
  highestLevel: number;
  currentWorldId: string;
  levelProgress: LevelProgress[];
}

export interface LevelProgress {
  worldId: string;
  levelId: number;
  stars: number;
  completed: boolean;
  objectives: {
    one: boolean;
    two: boolean;
    three: boolean;
  };
}

// Serviço de autenticação
export const authService = {
  loginWithGoogle: async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const userDoc = await getDoc(doc(db, 'players', result.user.uid));
      
      // Se não existe, cria um novo usuário usando o displayName do Google como username
      if (!userDoc.exists()) {
        const userData: User = {
          id: result.user.uid,
          username: result.user.displayName || `player${result.user.uid.slice(0, 5)}`,
          name: result.user.displayName || '',
          email: result.user.email || '',
          currentLevel: 1,
          totalScore: 0,
          highestLevel: 1,
          currentWorldId: "1",
          levelProgress: []
        };
        await setDoc(doc(db, 'players', result.user.uid), userData);
        return userData;
      }

      return userDoc.data() as User;
    } catch (error) {
      console.error('Erro no login com Google:', error);
      throw error;
    }
  },

  logout: async () => {
    try {
      await signOut(auth);
    } catch (error: any) {
      throw new Error(error.message);
    }
  },

  onAuthStateChanged: (callback: (user: FirebaseUser | null) => void) => {
    return onAuthStateChanged(auth, callback);
  }
};

// Serviço do jogo
export const gameService = {
  updateUsername: async (userId: string, username: string): Promise<User | null> => {
    try {
      const userRef = doc(db, 'players', userId);
      await updateDoc(userRef, { username });
      const updatedDoc = await getDoc(userRef);
      return updatedDoc.exists() ? updatedDoc.data() as User : null;
    } catch (error) {
      console.error('Erro ao atualizar username:', error);
      throw error;
    }
  },

  updateUserProgress: async (
    userId: string,
    worldId: string,
    levelId: number,
    _stars: number,
    completed: boolean,
    currentObjective: 'one' | 'two' | 'three' = 'one'
  ): Promise<boolean> => {
    try {
      const userDoc = await getDoc(doc(db, 'players', userId));
      if (!userDoc.exists()) return false;

      const userData = userDoc.data() as User;
      const levelProgress = [...(userData.levelProgress || [])];
      const existingProgressIndex = levelProgress.findIndex(
        p => p.worldId === worldId && p.levelId === levelId
      );

      if (existingProgressIndex >= 0) {
        // Atualizar progresso existente
        const currentProgress = levelProgress[existingProgressIndex];
        const objectives = {
          ...currentProgress.objectives || { one: false, two: false, three: false },
          [currentObjective]: true
        };
        
        // Calcular estrelas somando os objetivos completados (true = 1, false = 0)
        const totalStars = Number(objectives.one) + Number(objectives.two) + Number(objectives.three);
        
        levelProgress[existingProgressIndex] = {
          ...currentProgress,
          stars: totalStars,
          completed: completed || currentProgress.completed,
          objectives
        };
      } else {
        // Criar novo progresso
        const objectives = {
          one: currentObjective === 'one',
          two: currentObjective === 'two',
          three: currentObjective === 'three'
        };
        
        // Calcular estrelas iniciais somando os objetivos completados
        const totalStars = Number(objectives.one) + Number(objectives.two) + Number(objectives.three);
        
        levelProgress.push({
          worldId,
          levelId,
          stars: totalStars,
          completed,
          objectives
        });
      }

      // Atualizar documento do usuário
      await updateDoc(doc(db, 'players', userId), {
        levelProgress,
        // Atualizar outros campos relevantes
        highestLevel: Math.max(userData.highestLevel, levelId)
      });

      return true;
    } catch (error) {
      console.error('Erro ao atualizar progresso:', error);
      return false;
    }
  },

  getCurrentUserData: async (userId: string): Promise<User | null> => {
    try {
      const userDoc = await getDoc(doc(db, 'players', userId));
      return userDoc.exists() ? userDoc.data() as User : null;
    } catch (error) {
      console.error('Erro ao buscar dados do usuário:', error);
      return null;
    }
  },

  getRankings: async (): Promise<User[]> => {
    try {
      const playersRef = collection(db, 'players');
      const q = query(playersRef, orderBy('totalScore', 'desc'), limit(100));
      const querySnapshot = await getDocs(q);
      
      if (querySnapshot.empty) {
        console.log('Nenhum jogador encontrado');
        return [];
      }

      const players = querySnapshot.docs.map(doc => {
        const data = doc.data() as User;
        
        // Calcular total de estrelas baseado nos objetivos completados
        const totalStars = data.levelProgress?.reduce((acc, level) => {
          const objectivesCompleted = (level.objectives?.one ? 1 : 0) +
                                    (level.objectives?.two ? 1 : 0) +
                                    (level.objectives?.three ? 1 : 0);
          return acc + objectivesCompleted;
        }, 0) || 0;

        // Calcular níveis completados (onde todos os objetivos foram concluídos)
        const completedLevels = data.levelProgress?.filter(level => 
          level.objectives?.one && 
          level.objectives?.two && 
          level.objectives?.three
        ).length || 0;

        return {
          ...data,
          totalScore: totalStars,
          id: doc.id,
          completedLevels
        };
      });
      
      // Ordenar por total de estrelas
      return players.sort((a, b) => b.totalScore - a.totalScore);
    } catch (error) {
      console.error('Erro ao buscar rankings:', error);
      throw error;
    }
  }
};

// Re-exportando funções do gameService para manter compatibilidade
export const { updateUserProgress, getCurrentUserData } = gameService;

export { app, auth, db, analytics };
