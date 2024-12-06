import { useState } from 'react'
import useStore from '../store/gameStore'
import { db } from '../config/firebase'
import { doc, getDoc, updateDoc } from 'firebase/firestore'

interface UserProgress {
  currentLevel: number;
  highestLevel: number;
  totalScore: number;
}

export const useProgress = () => {
  const { user, setUser } = useStore()
  const [isUpdating, setIsUpdating] = useState(false)

  const updateProgress = async (levelId: number, score: number) => {
    if (!user) return false

    setIsUpdating(true)
    try {
      // Buscar progresso atual
      const userRef = doc(db, 'players', user.id)
      const userDoc = await getDoc(userRef)

      if (!userDoc.exists()) {
        console.error('Usuário não encontrado')
        return false
      }

      const userData = userDoc.data()

      // Atualizar apenas se o nível for maior que o atual
      const newHighestLevel = Math.max(userData.highestLevel || 1, levelId)
      const newTotalScore = (userData.totalScore || 0) + score

      // Atualizar no Firestore
      await updateDoc(userRef, {
        currentLevel: levelId,
        highestLevel: newHighestLevel,
        totalScore: newTotalScore,
      })

      // Atualizar estado local
      setUser({
        ...user,
        currentLevel: levelId,
        totalScore: newTotalScore,
        highestLevel: newHighestLevel
      })

      return true
    } catch (error) {
      console.error('Erro ao atualizar progresso:', error)
      return false
    } finally {
      setIsUpdating(false)
    }
  }

  const unlockNextLevel = async (currentLevelId: number) => {
    return updateProgress(currentLevelId + 1, 0)
  }

  const saveScore = async (levelId: number, score: number) => {
    if (!user) return false

    try {
      // Salvar score no histórico
      const userRef = doc(db, 'players', user.id)
      const userDoc = await getDoc(userRef)

      if (!userDoc.exists()) {
        console.error('Usuário não encontrado')
        return false
      }

      const userData = userDoc.data()
      const levelScores = userData.levelScores || []

      // Adicionar novo score
      levelScores.push({
        levelId,
        score,
        timestamp: new Date().toISOString()
      })

      // Atualizar scores e progresso geral
      await updateDoc(userRef, {
        levelScores
      })

      return updateProgress(levelId, score)
    } catch (error) {
      console.error('Erro ao salvar pontuação:', error)
      return false
    }
  }

  return {
    updateProgress,
    unlockNextLevel,
    saveScore,
    isUpdating,
  }
}

export default useProgress
