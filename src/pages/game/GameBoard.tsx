import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useStore from '../../store/gameStore';
import { worldLevels } from '../../data/levels/index';
import { useAchievements } from '../../hooks/useAchievements';
import './GameBoard.css';
import { gameService } from '../../config/firebase';
import { User as GameUser } from '../../types/game';
import useSound from 'use-sound';
import { gameSounds } from '../../config/sounds';

// Constantes para valores mágicos
const ANIMATION_DELAY = 200; // Delay de animação
const SPECIAL_EMOJI_CHANCE = 0.1;
const MIN_OBJECTIVE_EMOJIS = 3;
const COSMIC_MAGIC_PERCENTAGE = 0.5;

// Emojis base para cada mundo
const worldEmojis = {
  1: ['⚛️', '⚡', '✨', '💥', '🌠', '🌌', '🌟', '💫', '🌊', '🌑', '🕳️'],
  2: ['💫', '🌑', '🌍', '☀️', '🌌', '🪐'],
  3: ['⚗️', '🧬', '🧪', '🫧', '🦠', '🔬'],
  4: ['🔗', '🧬', '🧴', '🏭', '♻️', '🧪'],
  5: ['🔬', '➕', '🧱', '🧫', '🛠️', '🦠'],
  6: ['🌿', '🧩', '🧶', '🍄', '🌐', '🌱'],
  7: ['🌱', '🐙', '❤️', '🐟', '🌍', '🌊'],
  8: ['🌿', '🐞', '🫁', '🐸', '☀️', '🏞️'],
  9: ['🦎', '🌲', '🧠', '🐭', '🌍', '🌈'],
  10: ['🦐', '🐚', '🌱', '🦑', '🐟', '🍄'],
};

const getWorldEmojis = (worldId: number): string[] => {
  return worldEmojis[worldId as keyof typeof worldEmojis] || worldEmojis[1];
};

interface Position {
  row: number;
  col: number;
}

interface Tile {
  id: number;
  emoji: string;
  isSelected: boolean;
  isMatched: boolean;
  shake?: boolean;
  fall?: boolean;
  pop?: boolean;
  isNew?: boolean;
}

interface Objective {
  emojis: string[];
  requiredMatches: number;
  description: string;
  currentMatches: number;
  star: number;
  isActive: boolean;
  isCompleted: boolean;
  points?: number;
  currentPoints?: number;
}

interface Match {
  positions: Position[];
  length: number;
  type: 'horizontal' | 'vertical';
}

type StarLevel = 'one' | 'two' | 'three';

const GameBoard = () => {
    const navigate = useNavigate();
    const { worldId, levelId } = useParams();
    const { user } = useStore();
    const { updateMatches } = useAchievements();
  
    // State declarations
    const [grid, setGrid] = useState<Tile[][]>([]);
    const [objectives, setObjectives] = useState<Objective[]>([]);
    const [currentStar, setCurrentStar] = useState<number>(1);
    const [movesLeft, setMovesLeft] = useState<number>(15);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);
    const [starAnimation, setStarAnimation] = useState<number | null>(null);
    const [magicaCosmicaLeft, setMagicaCosmicaLeft] = useState<number>(0);
    const [gameOver, setGameOver] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [stars, setStars] = useState<number>(0);
    const [initialized, setInitialized] = useState(false);
    const [possibleMatches, setPossibleMatches] = useState<Position[]>([]);
    const [selectedTile, setSelectedTile] = useState<Position | null>(null);
    const [isProcessing, setIsProcessing] = useState<boolean>(false);
    const [isSoundEnabled, setIsSoundEnabled] = useState(true);
    const [isExtreme, setIsExtreme] = useState(false);
  
    // Adicionar um ref para controlar o estado de animação
    const gridRef = useRef(grid);
  
    // Obter dados do nível atual
    const currentWorld = worldId ? worldLevels[worldId] : null;
  
    // Se for extremo, buscar o mundo correto
    const extremeWorld = worldId?.includes('extreme') && worldId ? worldLevels[worldId] : null;
    const effectiveWorld = extremeWorld || currentWorld;

    // Atualizar o estado isExtreme quando o worldId mudar
    useEffect(() => {
      setIsExtreme(worldId?.includes('extreme') || false);
    }, [worldId]);

    const currentLevel = effectiveWorld?.levels.find((l) => l.id === Number(levelId)) || null;
  
    // Tamanho do grid dinâmico com base na configuração do nível
    const GRID_SIZE = currentLevel?.gridSize || effectiveWorld?.gridSize || 8;
  
    // Directions for tile movement
    const directions = [
      { row: -1, col: 0 }, // up
      { row: 1, col: 0 }, // down
      { row: 0, col: -1 }, // left
      { row: 0, col: 1 }, // right
    ];
  
      // Verificar se o nível é válido
  useEffect(() => {
    if (!currentLevel || !worldId) {
      console.log('Nível não encontrado:', { worldId, levelId, currentLevel });
      navigate('/worlds');
      return;
    }
    
    // Verificar se é um nível extremo
    if (!initialized && user) {
      // Verificar progresso existente
      const currentProgress = user.levelProgress?.find(
        (p) => p.worldId === worldId && p.levelId === Number(levelId)
      );

      console.log('Debug - Progresso encontrado:', currentProgress);

      // Determinar qual é o próximo objetivo não completado
      let nextStar = 1;
      if (currentProgress?.objectives) {
        if (currentProgress.objectives.one) {
          nextStar = 2;
          if (currentProgress.objectives.two) {
            nextStar = 3;
            if (currentProgress.objectives.three) {
              nextStar = 3; // Todos objetivos completados, manter no último
            }
          }
        }
      }

      console.log('Debug - Próxima estrela calculada:', nextStar);

      // Atualizar estado e inicializar grid
      setCurrentStar(nextStar);
      setStars(currentProgress?.stars || 0);

      // Aguardar a atualização do currentStar antes de inicializar os objetivos
      setTimeout(() => {
        const initialObjectives = initializeObjectives();
        if (initialObjectives) {
          initializeGrid(initialObjectives);
          const currentStarLevel: StarLevel = (['one', 'two', 'three'][nextStar - 1]) as StarLevel;
          setMovesLeft(currentLevel.starObjectives[currentStarLevel].maxMoves || 15);
          setGameOver(false);
          setShowResults(false);
          setInitialized(true);
        }
      }, 0);
    }
  }, [currentLevel, initialized, worldId, levelId, navigate, user]);
  
  // Atualizar movimentos quando mudar de objetivo
  useEffect(() => {
    if (currentLevel && currentStar >= 1 && currentStar <= 3 && initialized) {
      const currentStarLevel: StarLevel = (['one', 'two', 'three'][currentStar - 1]) as StarLevel;
      if (currentLevel.starObjectives[currentStarLevel]) {
        setMovesLeft(currentLevel.starObjectives[currentStarLevel].maxMoves || 15);
      }
    }
  }, [currentStar, currentLevel, initialized]);
  
  useEffect(() => {
    if (movesLeft === 0 && initialized && !gameOver) {
      // Verificar se todos os objetivos foram cumpridos
      const allObjectivesMet = objectives.every(obj => obj.currentMatches >= obj.requiredMatches);
      handleGameOver(allObjectivesMet);
    }
  }, [movesLeft, initialized, gameOver, objectives]);
  
  // Atualizar a ref quando o grid muda
  useEffect(() => {
    gridRef.current = grid;
  }, [grid]);

    // Add usage of isAnimating state
    useEffect(() => {
        setIsProcessing(isAnimating);
    }, [isAnimating]);

    // Função para inicializar objetivos
    const initializeObjectives = (): string[] => {
        if (!currentLevel || !worldId) return [];
      
        const currentStarLevel: StarLevel = (['one', 'two', 'three'][currentStar - 1]) as StarLevel;
        const starObjectiveConfig = currentLevel.starObjectives[currentStarLevel];
      
        if (!starObjectiveConfig) {
          console.error('Configuração de objetivo não encontrada');
          return [];
        }
      
        // Criar objetivos com base no nível atual
        const objectiveEmojis = splitEmojis(starObjectiveConfig.emoji);
        const newObjectives: Objective[] = [{
          emojis: objectiveEmojis,
          requiredMatches: starObjectiveConfig.requiredMatches,
          description: starObjectiveConfig.description,
          currentMatches: 0,
          star: currentStar,
          isActive: true,
          isCompleted: false,
          points: isExtreme ? starObjectiveConfig.points : undefined,
          currentPoints: isExtreme ? 0 : undefined
        }];
        
        console.log('Objetivos inicializados:', newObjectives);
        setObjectives(newObjectives);
      
        // Retornar os emojis para uso na inicialização do grid
        return objectiveEmojis;
      };
  
  // Atualizar a função getAllLevelObjectives para incluir os pontos
  const getAllLevelObjectives = (): Objective[] => {
    if (!currentLevel) return [];
    
    const allObjectives = [];
    const starLevels: StarLevel[] = ['one', 'two', 'three'];
    
    for (let i = 0; i < 3; i++) {
      const starLevel = starLevels[i];
      const config = currentLevel.starObjectives[starLevel];
      if (config) {
        const emojis = splitEmojis(config.emoji);
        allObjectives.push({
          emojis,
          requiredMatches: config.requiredMatches,
          description: config.description,
          currentMatches: 0,
          star: i + 1,
          isActive: i + 1 === currentStar,
          isCompleted: user?.levelProgress?.find(
            (p) => p.worldId === worldId && p.levelId === Number(levelId)
          )?.objectives?.[starLevel] || false,
          // Adicionar pontos se estiver no modo extremo
          points: isExtreme ? config.points : undefined,
          currentPoints: isExtreme ? (objectives[0]?.currentPoints || 0) : undefined
        });
      }
    }
    
    return allObjectives;
  };

    // Função auxiliar para gerar IDs únicos baseados em posição e timestamp
    const generateUniqueId = useCallback((row: number, col: number): number => {
        return Date.now() * 100 + row * GRID_SIZE + col;
    }, [GRID_SIZE]);

  // 1. Primeiro, declarar getRandomEmoji
  const getRandomEmoji = useCallback(
    (
      currentGrid: Tile[][],
      currentRow: Tile[],
      row: number,
      col: number,
      currentObjectiveEmojis: string[],
      avoidEmojis: string[] = []
    ): string => {
      const useObjectiveEmoji = Math.random() < 0.3;
      const useSpecialEmoji = Math.random() < SPECIAL_EMOJI_CHANCE;

      // Obter todos os emojis disponíveis para o mundo extremo
      let availableEmojis = useObjectiveEmoji
          ? currentObjectiveEmojis
          : (isExtreme && currentWorld?.combinations 
             ? currentWorld.combinations.map(c => c.emoji) 
             : getWorldEmojis(Number(worldId) || 1));

      availableEmojis = availableEmojis.filter((emoji) => !avoidEmojis.includes(emoji));
  
      // If special emoji is selected, return it
      if (useSpecialEmoji && currentWorld?.specialEmoji) {
          return currentWorld.specialEmoji;
      }
  
      // Função para verificar matches
      const wouldMatch = (emoji: string, row: number, col: number): boolean => {
          // Verificar match horizontal
          const matchHorizontal =
          (col >= 2 &&
              currentRow[col - 1]?.emoji === emoji &&
              currentRow[col - 2]?.emoji === emoji) ||
          (col <= GRID_SIZE - 3 &&
              currentRow[col + 1]?.emoji === emoji &&
              currentRow[col + 2]?.emoji === emoji) ||
          (col >= 1 &&
              col <= GRID_SIZE - 2 &&
              currentRow[col - 1]?.emoji === emoji &&
              currentRow[col + 1]?.emoji === emoji);
    
          // Verificar match vertical
          const matchVertical =
          (row >= 2 &&
              currentGrid[row - 1]?.[col]?.emoji === emoji &&
              currentGrid[row - 2]?.[col]?.emoji === emoji) ||
          (row <= GRID_SIZE - 3 &&
              currentGrid[row + 1]?.[col]?.emoji === emoji &&
              currentGrid[row + 2]?.[col]?.emoji === emoji) ||
          (row >= 1 &&
              row <= GRID_SIZE - 2 &&
              currentGrid[row - 1]?.[col]?.emoji === emoji &&
              currentGrid[row + 1]?.[col]?.emoji === emoji);
    
          return matchHorizontal || matchVertical;
      };
  
      // Filtrar emojis que criariam matches imediatos
      if (availableEmojis.length > 0) {
      availableEmojis = availableEmojis.filter((emoji) => !wouldMatch(emoji, row, col));
      }
  
      // Se não houver emojis disponíveis, usar qualquer emoji do mundo
      if (availableEmojis.length === 0) {
      availableEmojis = getWorldEmojis(Number(worldId) || 1);
      }
      
      return availableEmojis[Math.floor(Math.random() * availableEmojis.length)];
    },
    [GRID_SIZE, worldId, currentWorld, isExtreme]
  );

  // 2. Depois, declarar ensureMinimumObjectiveEmojis
  const ensureMinimumObjectiveEmojis = useCallback(
    async (currentGrid: Tile[][], currentObjectiveEmojis: string[]): Promise<Tile[][]> => {
      const updatedGrid = currentGrid.map((row) => row.map((tile) => ({ ...tile })));
      let currentObjectiveCount = 0;
  
      // Contar emojis objetivos existentes
      updatedGrid.forEach((row) => {
          row.forEach((tile) => {
              if (currentObjectiveEmojis.includes(tile.emoji)) {
                  currentObjectiveCount++;
              }
          });
      });
  
      // Adicionar mais emojis objetivos se necessário
      while (currentObjectiveCount < MIN_OBJECTIVE_EMOJIS) {
          const row = Math.floor(Math.random() * GRID_SIZE);
          const col = Math.floor(Math.random() * GRID_SIZE);
  
          if (!currentObjectiveEmojis.includes(updatedGrid[row][col].emoji)) {
          updatedGrid[row][col].emoji =
              currentObjectiveEmojis[Math.floor(Math.random() * currentObjectiveEmojis.length)];
              currentObjectiveCount++;
          }
      }
  
      return updatedGrid;
    },
    [GRID_SIZE]
  );

  // 3. Por fim, declarar initializeGrid que usa as funções acima
  const initializeGrid = useCallback(
    (currentObjectives: string[]) => {
        const newGrid: Tile[][] = [];
        const currentObjectiveEmojis = currentObjectives;
    
        console.log('Objetivos atuais:', currentObjectiveEmojis);
    
        // Criar grid com emojis aleatórios, evitando matches iniciais
        for (let i = 0; i < GRID_SIZE; i++) {
          const row: Tile[] = [];
          for (let j = 0; j < GRID_SIZE; j++) {
            let emoji = getRandomEmoji(newGrid, row, i, j, currentObjectiveEmojis);
            row.push({
              id: generateUniqueId(i, j),
              emoji,
              isSelected: false,
              isMatched: false
            });
          }
          newGrid.push(row);
        }
        
        setGrid(newGrid);
    
        // Garantir que pelo menos o número mínimo de emojis objetivos estejam no grid
        ensureMinimumObjectiveEmojis(newGrid, currentObjectiveEmojis).then(updatedGrid => {
            setGrid(updatedGrid.map((row, i) => 
              row.map((tile, j) => ({
                ...tile,
                id: generateUniqueId(i, j)
              }))
            ));
        });
      },
      [GRID_SIZE, generateUniqueId, ensureMinimumObjectiveEmojis, getRandomEmoji]
    );

    const isAdjacent = (row1: number, col1: number, row2: number, col2: number): boolean => {
        return (
        (Math.abs(row1 - row2) === 1 && col1 === col2) ||
        (Math.abs(col1 - col2) === 1 && row1 === row2)
        );
    };
    
    const findMatches = (board: Tile[][]): Match[] => {
        const matches: Match[] = [];
        const visited = new Set<string>();
      
        // Função auxiliar para verificar sequência
        const checkSequence = (row: number, col: number, direction: 'horizontal' | 'vertical'): Match | null => {
            const emoji = board[row][col].emoji;
            if (emoji === '') return null;
        
            const positions: Position[] = [{ row, col }];
            const delta = direction === 'horizontal' ? { row: 0, col: 1 } : { row: 1, col: 0 };
        
            // Verificar em uma direção
            let nextRow = row + delta.row;
            let nextCol = col + delta.col;
            while (
                nextRow >= 0 &&
                nextRow < GRID_SIZE &&
                nextCol >= 0 &&
                nextCol < GRID_SIZE &&
                board[nextRow][nextCol].emoji === emoji
            ) {
                positions.push({ row: nextRow, col: nextCol });
                nextRow += delta.row;
                nextCol += delta.col;
            }
        
            // Verificar na direção oposta
            nextRow = row - delta.row;
            nextCol = col - delta.col;
            while (
                nextRow >= 0 &&
                nextRow < GRID_SIZE &&
                nextCol >= 0 &&
                nextCol < GRID_SIZE &&
                board[nextRow][nextCol].emoji === emoji
            ) {
                positions.unshift({ row: nextRow, col: nextCol });
                nextRow -= delta.row;
                nextCol -= delta.col;
            }
        
            if (positions.length >= 3) {
                return {
                positions: positions.sort((a, b) =>
                    direction === 'horizontal' ? a.col - b.col : a.row - b.row
                ),
                length: positions.length,
                type: direction,
                };
            }
            return null;
        };
      
        // Verificar todo o grid
        for (let row = 0; row < GRID_SIZE; row++) {
          for (let col = 0; col < GRID_SIZE; col++) {
            // Verificar sequência horizontal e vertical
            const horizontalMatch = checkSequence(row, col, 'horizontal');
            const verticalMatch = checkSequence(row, col, 'vertical');
      
            [horizontalMatch, verticalMatch].forEach((match) => {
              if (match) {
                const key = match.positions.map((p) => `${p.row},${p.col}`).join('|');
                if (!visited.has(key)) {
                    matches.push(match);
                    visited.add(key);
                }
              }
            });
          }
        }
        return matches;
    };
    
    const checkPossibleMatch = (row1: number, col1: number, row2: number, col2: number): boolean => {
        const tempGrid = grid.map(r => r.map(tile => ({ ...tile })));
        const temp = tempGrid[row1][col1].emoji;
        tempGrid[row1][col1].emoji = tempGrid[row2][col2].emoji;
        tempGrid[row2][col2].emoji = temp;
    
        const matches = findMatches(tempGrid);
        
        if (matches.length > 0) {
            const newPossibleMatches: Position[] = [
                { row: row1, col: col1 },
                { row: row2, col: col2 }
            ];
            setPossibleMatches(newPossibleMatches);
            return true;
        }
        return false;
    };
    
    const handleTileClick = (row: number, col: number) => {
        if (isProcessing || gameOver) return;
        
        // Tocar o som antes de qualquer outra operação
        if (isSoundEnabled) {
            playPop();
            console.log('Playing pop sound'); // Debug
        }
        
        const workingGrid = grid.map(r => r.map(tile => ({ ...tile, isSelected: false })));
    
        const updatePossibleMoves = (currentRow: number, currentCol: number) => {
            const possibleMoves: Position[] = [];
            for (const dir of directions) {
                const newRow = currentRow + dir.row;
                const newCol = currentCol + dir.col;
                if (newRow >= 0 && newRow < GRID_SIZE && newCol >= 0 && newCol < GRID_SIZE) {
                    if (checkPossibleMatch(currentRow, currentCol, newRow, newCol)) {
                    possibleMoves.push({ row: newRow, col: newCol });
                    }
                }
            }
            return possibleMoves;
        };
    
        if (selectedTile === null) {
            // Verificar possíveis matches quando seleciona a primeira peça
            const possibleMoves = updatePossibleMoves(row, col);
            if (possibleMoves.length > 0) {
                workingGrid[row][col].isSelected = true;
                setGrid(workingGrid);
                setSelectedTile({ row, col });
                setPossibleMatches(possibleMoves);
            }
        } else {
            const { row: selectedRow, col: selectedCol } = selectedTile;
    
            if (row === selectedRow && col === selectedCol) {
                // Desselecionar
                setSelectedTile(null);
                setPossibleMatches([]);
                setGrid(workingGrid);
            } else if (
                isAdjacent(row, col, selectedRow, selectedCol) &&
                possibleMatches.some((pos) => pos.row === row && pos.col === col)
            ) {
                // Só permite a troca se a posição estiver nos matches possíveis
                handleSwap(selectedRow, selectedCol, row, col);
                setPossibleMatches([]);
            } else {
                // Se clicou em outra peça, verifica os possíveis matches dela
                const possibleMoves = updatePossibleMoves(row, col);
                if (possibleMoves.length > 0) {
                workingGrid[row][col].isSelected = true;
                setGrid(workingGrid);
                setSelectedTile({ row, col });
                setPossibleMatches(possibleMoves);
                }
            }
        }
    };

    const onClick = useCallback((row: number, col: number) => {
        if (isProcessing || gameOver) return;
        handleTileClick(row, col);
    }, [isProcessing, gameOver, handleTileClick])

    const handleSwap = async (row1: number, col1: number, row2: number, col2: number) => {
      if (isProcessing) return;
      
      setIsProcessing(true);
      const workingGrid = grid.map(r => r.map(tile => ({ ...tile })));
      
      try {
        // Realizar a troca
        const temp = { ...workingGrid[row1][col1] };
        workingGrid[row1][col1] = { ...workingGrid[row2][col2] };
        workingGrid[row2][col2] = temp;
  
        // Verificar se há matches após a troca
        const matches = findMatches(workingGrid);
        
        if (matches.length > 0) {
            setGrid(workingGrid);
            setMovesLeft(prev => prev - 1);
            
            // Processar matches
            let updatedGrid = await processMatchesAndFall(workingGrid, matches, true);
            setGrid(updatedGrid);
        } else {
            // Reverter a troca se não houver matches
            const temp = { ...workingGrid[row1][col1] };
            workingGrid[row1][col1] = { ...workingGrid[row2][col2] };
            workingGrid[row2][col2] = temp;
            setGrid(workingGrid);
            setSelectedTile(null);
        }
        } finally {
            setIsProcessing(false);
            setSelectedTile(null);
      }
    };
    
    const processMatchesAndFall = async (currentGrid: Tile[][], matches: Match[], isUserMatch: boolean): Promise<Tile[][]> => {
        if (matches.length > 0 && isSoundEnabled) {
            // Verificar se há algum emoji especial nos matches
            const hasSpecialEmoji = matches.some(match => {
                const emoji = currentGrid[match.positions[0].row][match.positions[0].col].emoji;
                return emoji === currentWorld?.specialEmoji;
            });

            if (hasSpecialEmoji) {
                playSpecialMatch(); // Tocar som especial
            } else {
                playMatch(); // Tocar som normal
            }
        }
        // 1. Marcar matches para animação
        let workingGrid = currentGrid.map(row => row.map(tile => ({ ...tile })));
        const matchedPositions = new Set<string>();
        const matchedEmojis = new Map<string, number>();
      
        matches.forEach(match => {
            const emoji = workingGrid[match.positions[0].row][match.positions[0].col].emoji;
            matchedEmojis.set(emoji, (matchedEmojis.get(emoji) || 0) + 1);
        
            match.positions.forEach(({ row, col }) => {
                // Check if this is a special emoji
                if (emoji === currentWorld?.specialEmoji) {
                workingGrid = handleSpecialEmojiExplosion(workingGrid, row, col);
                }
        
                matchedPositions.add(`${row},${col}`);
                workingGrid[row][col] = {
                    ...workingGrid[row][col],
                    isMatched: true,
                    pop: true
                };
            });
        });
    
        if (isUserMatch && matches.length > 0) {
            await updateMatches();
        }
    
        setGrid(workingGrid);
        await new Promise(resolve => setTimeout(resolve, ANIMATION_DELAY));
      
        // 2. Remover elementos matched
        workingGrid = workingGrid.map(row => row.map(tile => ({ ...tile })));
        matchedPositions.forEach(pos => {
            const [row, col] = pos.split(',').map(Number);
            workingGrid[row][col] = {
                id: generateUniqueId(row, col),
                emoji: '',
                isSelected: false,
                isMatched: false,
                pop: false
            };
        });
      
        setGrid(workingGrid);
        
        // 3. Atualizar objetivos
        if (isUserMatch && matches.length > 0) {
            const updatedObjectives = objectives.map(objective => {
            const matchCount = Array.from(matchedEmojis.entries())
                .filter(([emoji]) => objective.emojis.includes(emoji))
                .reduce((sum, [, count]) => sum + count, 0);
            
            // Calcular pontos se estiver no modo extremo
            let newPoints = objective.currentPoints || 0;
            if (isExtreme && currentWorld) {
              matches.forEach(match => {
                const emoji = currentGrid[match.positions[0].row][match.positions[0].col].emoji;
                const combination = currentWorld.combinations.find(c => c.emoji === emoji);
                if (combination) {
                  // Cada posição do match adiciona os pontos base do emoji
                  match.positions.forEach(position => {
                    const matchPoints = combination.points;
                    console.log(`Match ${isUserMatch ? 'do usuário' : 'em cascata'} - Emoji ${emoji} (${combination.name}):`, {
                      pontos: matchPoints,
                      posição: `[${position.row},${position.col}]`
                    });
                    newPoints += matchPoints;
                  });
                }
              });
            }
            
            console.log('Total de pontos após matches:', {
              pontosAnteriores: objective.currentPoints || 0,
              novoPontos: newPoints,
              diferença: newPoints - (objective.currentPoints || 0),
              tipoMatch: isUserMatch ? 'usuário' : 'cascata'
            });
            
            return {
                ...objective,
                currentMatches: objective.currentMatches + matchCount,
                currentPoints: newPoints
            };
            });
    
            setObjectives(updatedObjectives);

            // Verificar condições de objetivo apenas após matches do usuário
            if (isUserMatch && currentLevel) {
              const currentStarLevel: StarLevel = (['one', 'two', 'three'][currentStar - 1]) as StarLevel;
              const starObjectiveConfig = currentLevel.starObjectives[currentStarLevel];
              
              if (starObjectiveConfig) {
                const objective = updatedObjectives[0];
                const matchesComplete = objective.currentMatches >= starObjectiveConfig.requiredMatches;
                const pointsComplete = isExtreme 
                  ? objective.currentPoints >= (starObjectiveConfig.points || 0)
                  : true;
                
                const objectiveComplete = matchesComplete && pointsComplete;

                if (objectiveComplete && movesLeft > 0) {
                  console.log('Objetivo completado:', {
                    matches: `${objective.currentMatches}/${starObjectiveConfig.requiredMatches}`,
                    pontos: isExtreme ? `${objective.currentPoints}/${starObjectiveConfig.points}` : 'N/A',
                    movesRestantes: movesLeft
                  });
                  
                  Promise.resolve().then(() => {
                    handleStarComplete();
                  });
                } else if (movesLeft === 0) {
                  console.log('Game Over - Objetivo incompleto:', {
                    matches: `${objective.currentMatches}/${starObjectiveConfig.requiredMatches}`,
                    pontos: isExtreme ? `${objective.currentPoints}/${starObjectiveConfig.points}` : 'N/A',
                    completo: objectiveComplete
                  });
                  
                  Promise.resolve().then(() => {
                    handleGameOver(false);
                  });
                }
              }
            }
      }
      
      // 4. Processar a queda
      workingGrid = await handleFall(workingGrid);
    
      // 5. Verificar novos matches
      const newMatches = findMatches(workingGrid);
      if (newMatches.length > 0) {
        return processMatchesAndFall(workingGrid, newMatches, false);
      }
    
      return workingGrid;
    };
    
    const handleFall = async (inputGrid: Tile[][]): Promise<Tile[][]> => {
      let workingGrid = inputGrid.map(r => r.map(tile => ({ ...tile })));
      let hasChanges = false;

        // 1. Aplicar gravidade
        for (let col = 0; col < GRID_SIZE; col++) {
            let emptySpaces = [];
            for (let row = GRID_SIZE - 1; row >= 0; row--) {
              if (workingGrid[row][col].emoji === '') {
                emptySpaces.push(row);
              }
            }
      
            for (let emptyRow of emptySpaces) {
              let sourceRow = emptyRow - 1;
              while (sourceRow >= 0 && workingGrid[sourceRow][col].emoji === '') {
                sourceRow--;
              }
      
                if (sourceRow >= 0) {
                    workingGrid[emptyRow][col] = {
                        ...workingGrid[sourceRow][col],
                        id: generateUniqueId(emptyRow, col),
                        fall: true
                    };
                    workingGrid[sourceRow][col] = {
                        id: generateUniqueId(sourceRow, col),
                        emoji: '',
                        isSelected: false,
                        isMatched: false,
                        fall: false
                    };
                    hasChanges = true;
                }
            }

            // Preencher espaços vazios no topo
            for (let row = 0; row < GRID_SIZE; row++) {
                if (workingGrid[row][col].emoji === '') {
                    const emoji = getWorldEmojis(Number(worldId) || 1)[
                        Math.floor(Math.random() * getWorldEmojis(Number(worldId) || 1).length)
                    ];
                    workingGrid[row][col] = {
                        id: generateUniqueId(row, col),
                        emoji,
                        isSelected: false,
                        isMatched: false,
                        fall: true,
                        isNew: true
                    };
                    hasChanges = true;
                }
            }
        }
        
        if (hasChanges) {
            setGrid(workingGrid);
            await new Promise(resolve => setTimeout(resolve, ANIMATION_DELAY));
      
        // Remover animações
            workingGrid = workingGrid.map((row: Tile[], i: number) =>
                row.map((tile: Tile, j: number) => ({
                    ...tile,
                    id: generateUniqueId(i, j),
                    fall: false,
                    isNew: false
                }))
            );
        }
        
        return workingGrid;
    };
    
    const handleSpecialEmojiExplosion = (grid: Tile[][], row: number, col: number): Tile[][] => {
        const workingGrid = grid.map(r => r.map(tile => ({ ...tile })));
        const explosionRadius = currentWorld?.explosionRadius || 1;
        const maxRadius = explosionRadius + 1; // Aumentar o raio para a animação
    
        const animateExplosion = async () => {
            for (let radius = 0; radius <= maxRadius; radius++) {
                for (let dx = -radius; dx <= radius; dx++) {
                    for (let dy = -radius; dy <= radius; dy++) {
                        if (Math.abs(dx) + Math.abs(dy) > radius) continue; // Forma de diamante
    
                        const newRow = row + dx;
                        const newCol = col + dy;
                    
                        if (newRow >= 0 && newRow < GRID_SIZE && newCol >= 0 && newCol < GRID_SIZE) {
                            workingGrid[newRow][newCol] = {
                                ...workingGrid[newRow][newCol],
                                isMatched: true,
                                pop: true,
                                emoji: '' // Limpar o emoji
                            };
                        }
                    }
                }
                setGrid([...workingGrid]);
                await new Promise(resolve => setTimeout(resolve, 50)); // Atraso para efeito de expansão
            }
        
            // Refill the exploded positions with new emojis after animation
            for (let radius = 0; radius <= maxRadius; radius++) {
                for (let dx = -radius; dx <= radius; dx++) {
                for (let dy = -radius; dy <= radius; dy++) {
                    if (Math.abs(dx) + Math.abs(dy) > radius) continue; // Forma de diamante
    
                    const newRow = row + dx;
                    const newCol = col + dy;
    
                    if (newRow >= 0 && newRow < GRID_SIZE && newCol >= 0 && newCol < GRID_SIZE) {
                        // Priorizar emojis objetivos se disponíveis
                        const currentObjectiveEmojis = objectives[0]?.emojis || [];
                        const emoji = getRandomEmoji(
                            workingGrid,
                            workingGrid[newRow],
                            newRow,
                            newCol,
                            currentObjectiveEmojis,
                            [] // Sem emojis para evitar
                        );
    
                        workingGrid[newRow][newCol] = {
                            id: generateUniqueId(newRow, newCol),
                            emoji,
                            isSelected: false,
                            isMatched: false,
                            fall: true,
                            isNew: true
                        };
                    }
                }
            }
        }
    
            setGrid([...workingGrid]);
        };
    
        animateExplosion();
        return workingGrid;
    };

    const handleStarComplete = async () => {
        if (isSoundEnabled) playSuccess();
        if (!user || !worldId || !levelId || !currentLevel) return;
        
        // Determinar qual objetivo foi completado
        const currentObjective = (['one', 'two', 'three'][currentStar - 1]) as 'one' | 'two' | 'three';
        
        // Atualizar o número de estrelas
        const newStars = currentStar;
        setStars(newStars);
        setStarAnimation(currentStar);
        
        // Se completou todas as estrelas
        if (currentStar === 3) {
          setTimeout(() => handleGameOver(true), 1000);
          return;
        }
    
        // Mostrar tela de resultados
        setShowResults(true);
        
        try {
          // Salvar o progresso atual
          await gameService.updateUserProgress(
            user.id,
            worldId.toString(),
            Number(levelId),
            newStars,
            true,
            currentObjective
          );
          
          // Buscar dados atualizados do usuário
          const updatedUserData = await gameService.getCurrentUserData(user.id);
          if (updatedUserData) {
            const gameUser: GameUser = {
              ...updatedUserData,
              createdAt: new Date(),
              lastLoginAt: new Date()
            };
            useStore.getState().setUser(gameUser);
          }
        } catch (error) {
          console.error('Erro ao atualizar progresso:', error);
        }
      };
    
      // Nova função para lidar com a transição para o próximo objetivo
    const handleContinueToNextStar = () => {
        const nextStar = currentStar + 1;
    
        // Atualizar estados em ordem específica
        setShowResults(false);
        setGameOver(false);
        setCurrentStar(nextStar);
        setStarAnimation(null);
    
        // Inicializar novo objetivo
        const nextStarLevel: StarLevel = (['one', 'two', 'three'][nextStar - 1]) as StarLevel;
        const nextObjectives = currentLevel?.starObjectives[nextStarLevel];
    
        if (nextObjectives) {
        // Atualizar objetivos e movimentos para o próximo nível
        const newObjectives = [{
            emojis: splitEmojis(nextObjectives.emoji),
            requiredMatches: nextObjectives.requiredMatches,
            description: nextObjectives.description,
            currentMatches: 0,
            star: nextStar,
            isActive: true,
            isCompleted: false,
            currentPoints: 0, // Inicializar pontos atuais
            points: nextObjectives.points // Adicionar pontos objetivo
        }];
        
        setObjectives(newObjectives);
        setMovesLeft(nextObjectives.maxMoves);
        
        // Inicializar novo grid com os novos objetivos
        initializeGrid(splitEmojis(nextObjectives.emoji));
        }
    };
    
    const handleGameOver = async (allObjectivesMet: boolean) => {
        setGameOver(true);
        setShowResults(true);
        
        if (allObjectivesMet && user && worldId && levelId) {
            const currentStarLevel: StarLevel = (['one', 'two', 'three'][currentStar - 1]) as StarLevel;
            const starObjectiveConfig = currentLevel?.starObjectives[currentStarLevel];
            
            if (starObjectiveConfig && objectives[0]) {
              const matchesComplete = objectives[0].currentMatches >= starObjectiveConfig.requiredMatches;
              const pointsComplete = isExtreme 
                ? (objectives[0].currentPoints || 0) >= (starObjectiveConfig.points || 0)
                : true;
              
              // Só considera completo se ambas as condições forem atendidas no modo extremo
              const isComplete = isExtreme ? (matchesComplete && pointsComplete) : matchesComplete;

              if (isComplete) {
                const finalStars = currentStar;
                setStars(finalStars);
                
                try {
                  await gameService.updateUserProgress(
                    user.id,
                    worldId.toString(),
                    Number(levelId),
                    finalStars,
                    true,
                    currentStarLevel
                  );
                  
                  // Atualizar dados do usuário
                  const updatedUserData = await gameService.getCurrentUserData(user.id);
                  if (updatedUserData) {
                    const gameUser: GameUser = {
                      ...updatedUserData,
                      createdAt: new Date(),
                      lastLoginAt: new Date()
                    };
                    useStore.getState().setUser(gameUser);
                  }
                } catch (error) {
                  console.error('Erro ao atualizar progresso:', error);
                }
              }
            }
        }
    };
    
    const handleBack = () => {
      // Se for um nível extremo, extrair o ID do mundo base
      const baseWorldId = worldId?.replace('-extreme', '');
      navigate(`/levels/${baseWorldId}`);
    };
    
    const handleRestart = () => {
        // Limpar os estados antes de navegar
        setShowResults(false);
        setGameOver(false);
        setStars(0);
        setCurrentStar(1);
        setGrid([]);
        setObjectives([]);
        setMovesLeft(0);
        setInitialized(false);
        
        // Extrair o ID do mundo base (remover -extreme se existir)
        const baseWorldId = worldId?.replace('-extreme', '');
        
        // Navegar de volta para a tela de seleção de níveis
        navigate(`/levels/${baseWorldId}`);
    };
    
    // Função para aplicar a Mágica Cósmica
    const aplicarMagicaCosmica = () => {
        if (magicaCosmicaLeft <= 0 || isProcessing || isAnimating || !objectives[0]) {
        return;
        }
        if (isSoundEnabled) playMagic();
        setIsAnimating(true);
        setIsProcessing(true);
    
        // Criar uma cópia do grid atual
        const newGrid = grid.map(row => [...row]);
        const targetEmoji = objectives[0].emojis[0];
        const totalCells = GRID_SIZE * GRID_SIZE;
        const cellsToChange = Math.floor(totalCells * COSMIC_MAGIC_PERCENTAGE); // 50% do tabuleiro
    
        // Criar lista de todas as posições possíveis
        const positions: Position[] = [];
        for (let row = 0; row < GRID_SIZE; row++) {
            for (let col = 0; col < GRID_SIZE; col++) {
                positions.push({ row, col });
            }
        }
    
        // Embaralhar as posições
        for (let i = positions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [positions[i], positions[j]] = [positions[j], positions[i]];
        }
    
        // Alterar 50% das células para o emoji objetivo
        for (let i = 0; i < cellsToChange; i++) {
            const { row, col } = positions[i];
            newGrid[row][col] = {
                ...newGrid[row][col],
                emoji: targetEmoji,
                shake: true,
            };
        }
    
        setGrid(newGrid);
        setMagicaCosmicaLeft(prev => prev - 1);
    
        // Resetar animações após um delay
        setTimeout(() => {
            const resetGrid = newGrid.map(row =>
                row.map(tile => ({ ...tile, shake: false }))
            );
            setGrid(resetGrid);
            setIsAnimating(false);
            setIsProcessing(false);
        }, 500);
    };
    
    // Inicializar magicaCosmicaLeft quando o nível é carregado
    useEffect(() => {
        if (currentLevel && initialized) {
        setMagicaCosmicaLeft(currentLevel.magicaCosmicaCount || 0);
        }
    }, [currentLevel, initialized]);
    
    // Função auxiliar para verificar se o objetivo atual foi completado
    const isCurrentObjectiveComplete = () => {
        if (!currentLevel || objectives.length === 0) return false;
        
        const currentStarLevel = (['one', 'two', 'three'][currentStar - 1]) as StarLevel;
        const starObjectiveConfig = currentLevel?.starObjectives?.[currentStarLevel];
        
        if (!starObjectiveConfig) return false;
        
        const objective = objectives[0];
        return objective.currentMatches >= starObjectiveConfig.requiredMatches;
    };
    
    const splitEmojis = (text: string): string[] => {
        const emojiRegex = /\p{Extended_Pictographic}/gu;
        return Array.from(text.match(emojiRegex) || []);
    };
    
    const renderTile = (tile: Tile, row: number, col: number) => {
        const isSelected = selectedTile?.row === row && selectedTile?.col === col;
        const isPossibleMatch = possibleMatches.some(pos => pos.row === row && pos.col === col);
        const isSpecial = tile.emoji === currentWorld?.specialEmoji;
    
        const classes = [
        'tile',
        isSelected && 'selected',
        tile.shake && 'shake',
        tile.fall && 'fall',
        tile.pop && 'pop',
        tile.isMatched && 'match',
        isPossibleMatch && 'possible-match',
        tile.isNew && 'new',
        isSpecial && 'special-emoji',
        ].filter(Boolean).join(' ');
    
        return (
        <div
            key={`${row}-${col}`}
            className={classes}
            onClick={() => onClick(row, col)}
            role="button"
            tabIndex={0}
            data-testid={`tile-${row}-${col}`}
            data-special={isSpecial}
        >
            {tile.emoji}
        </div>
        );
    };
    
    // Adicione os hooks de som
    const [playMatch] = useSound(gameSounds.match, { 
        volume: isSoundEnabled ? 0.5 : 0,
        soundEnabled: isSoundEnabled 
    });
    const [playPop] = useSound(gameSounds.pop, { 
        volume: isSoundEnabled ? 1.0 : 0,
        soundEnabled: isSoundEnabled,
        interrupt: true,
        sprite: {
            pop: [0, 300]
        }
    });
    const [playSuccess] = useSound(gameSounds.success, { 
        volume: isSoundEnabled ? 0.6 : 0,
        soundEnabled: isSoundEnabled 
    });
    const [playMagic] = useSound(gameSounds.magic, { 
        volume: isSoundEnabled ? 0.4 : 0,
        soundEnabled: isSoundEnabled 
    });
    const [playSpecialMatch] = useSound(gameSounds.specialMatch, { 
        volume: isSoundEnabled ? 0.8 : 0,
        soundEnabled: isSoundEnabled,
        interrupt: true
    });
    
    // Adicione um botão de controle de som
    const toggleSound = () => {
        setIsSoundEnabled(!isSoundEnabled);
    };
    
    return (
        <div className="game-board">
            <div 
              className={`game-container ${isExtreme ? 'extreme-mode' : ''}`}
              data-extreme={isExtreme}
            >
            <div className="info-section">
                <div className="header-container">
                    <h1>{currentLevel?.name}</h1>
                    <div className="extreme-badge">MODO EXTREMO</div>
                    <p className="level-story">{currentLevel?.story}</p>
                    <div className="button-container">
                        {magicaCosmicaLeft > 0 && (
                            <button
                                className="magic-button"
                                onClick={aplicarMagicaCosmica}
                                disabled={isAnimating}
                            >
                                <span>✨</span>
                                <span>Mágica Cósmica ({magicaCosmicaLeft})</span>
                            </button>
                        )}
                        <button className="back-button" onClick={handleBack}>
                            <span>↩</span>
                            <span>Voltar</span>
                        </button>
                    </div>
                </div>

                {/* Adicionar o painel de pontos para modo extremo */}
                {isExtreme && currentWorld && (
                    <div className="points-panel">
                        <div className="points-panel-header">
                            <span className="points-icon">💯</span>
                            <span>Pontuação dos Elementos</span>
                        </div>
                        <div className="points-grid">
                            {currentWorld.combinations.map((combo, index) => (
                                <div key={index} className="points-item">
                                    <div className="points-content">
                                        <span className="points-emoji">{combo.emoji}</span>
                                        <div className="points-info">
                                            <span className="points-name">{combo.name}</span>
                                            <span className="points-value">{combo.points}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="info-container">
                <div className="objectives">
                    {getAllLevelObjectives().map((objective, index) => (
                    <div 
                        key={index} 
                        className={`objective ${objective.isActive ? 'active' : ''} ${objective.isCompleted ? 'completed' : ''}`}
                    >
                        <div className="objective-header">
                        <div className="objective-star">
                            {objective.star}ª ⭐
                        </div>
                        <div className="objective-emojis">
                            {objective.emojis.map((emoji, i) => (
                            <span key={i}>{emoji}</span>
                            ))}
                        </div>
                        <div className="objective-progress">
                            {objective.isActive ? (
                              <div className="progress-container">
                                <div className="matches-progress">
                                  {objectives[0]?.currentMatches || 0} / {objective.requiredMatches}
                                </div>
                                {isExtreme && objective.points && (
                                  <div className={`objective-points ${
                                    (objectives[0]?.currentPoints || 0) >= objective.points ? 'achieved' : ''
                                  }`}>
                                    {objectives[0]?.currentPoints?.toLocaleString() || 0} / {objective.points?.toLocaleString()} pts
                                  </div>
                                )}
                              </div>
                            ) : objective.isCompleted ? '✓ Completo' : 'Bloqueado'}
                        </div>
                        </div>
                        <div className="objective-description">
                        {objective.description || 'Combine os emojis para completar o objetivo'}
                        </div>
                    </div>
                    ))}
                </div>
                
                <div className="moves-container">
                    <div className="moves-info">
                    <div className="moves-count">
                        <span className="moves-icon">🎯</span>
                        <span className="moves-number">{movesLeft}</span>
                        <span className="moves-label">movimentos</span>
                    </div>
                    </div>
                </div>
                </div>
            </div>
    
            <div 
              className="grid-container" 
              data-extreme={isExtreme}
            >
                <div 
                  className="grid"
                  data-size={GRID_SIZE}
                >
                {grid.map((row, i) => (
                    <div key={i} className="row">
                    {row.map((tile, j) => (
                        renderTile(tile, i, j)
                    ))}
                    </div>
                ))}
                </div>
            </div>
            </div>
    
            {showResults && (
            <div className="results-container">
                <div className="results-content">
                <h2 className="results-title">
                    {gameOver 
                    ? "🎉 Nível Completado! 🎉" 
                    : isCurrentObjectiveComplete() 
                        ? "✨ Objetivo Concluído! ✨" 
                        : "❌ Objetivo Incompleto"}
                </h2>
                
                <div className="stars-earned">
                    {[1, 2, 3].map((star) => (
                    <div key={star} className="star-container">
                        <span
                        className={`star ${star <= stars ? 'earned' : ''} ${starAnimation === star ? 'star-pop' : ''}`}
                        >
                        ⭐
                        </span>
                        <div className={`star-label ${star <= stars ? 'earned' : ''}`}>
                        {star}ª Estrela
                        </div>
                    </div>
                    ))}
                </div>
    
                <div className="results-message">
                    {isCurrentObjectiveComplete() 
                    ? <p className="success-message">Parabéns! Continue assim para conquistar mais estrelas!</p>
                    : <p className="incomplete-message">Continue tentando! Você está quase lá!</p>
                    }
                </div>
                
                <div className="results-actions">
                    {currentStar < 3 && isCurrentObjectiveComplete() && (
                    <button onClick={handleContinueToNextStar} className="continue-button">
                        <span className="button-icon">🚀</span>
                        Próxima Estrela
                        <span className="button-description">{currentStar + 1}ª Estrela</span>
                    </button>
                    )}
                    <div className="secondary-actions">
                    <button onClick={handleRestart} className="restart-button">
                        <span className="button-icon">↩️</span>
                        Voltar aos Níveis
                    </button>
                    </div>
                </div>
                </div>
            </div>
            )}
            <button 
                className="sound-toggle"
                onClick={toggleSound}
            >
                {isSoundEnabled ? '🔊' : '🔇'}
            </button>
        </div>
    );
    };
    
    export default GameBoard;