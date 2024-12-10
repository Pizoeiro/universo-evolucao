import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { world1MainQuest, MainQuestContent, Dialog } from '../../config/levels/world1/World1MainQuest';
import { world2MainQuest } from '../../config/levels/world2/World2MainQuest';
import { useAchievements } from '../../hooks/useAchievements';
import { FaArrowRight, FaStar, FaBook } from 'react-icons/fa';
import StarBackground from '../../components/StarBackground';

import './MainQuest.css';

// Importar imagens dos personagens
import ladyQuantumImg from '../../assets/characters/lady-quantum.png';
import ecoImg from '../../assets/characters/eco.png';
import elohimImg from '../../assets/characters/elohim.png';
import cronusImg from '../../assets/characters/cronus.png';
import observerImg from '../../assets/characters/observer.png';

// Mapa de imagens dos personagens
const characterImages: { [key: string]: string } = {
  'Lady Quantum': ladyQuantumImg,
  'Eco': ecoImg,
  'Elohim': elohimImg,
  'Mestre Cronus': cronusImg,
  'Observador do Vazio': observerImg
};

// Variantes de animação
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1
    }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.3 }
  }
};

const contentVariants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.8
    }
  }
};

const MainQuest = () => {
  const navigate = useNavigate();
  const { worldId, levelId } = useParams();
  const [currentDialogIndex, setCurrentDialogIndex] = useState(0);
  const [currentCuriosityIndex, setCurrentCuriosityIndex] = useState(0);
  const [mainQuestContent, setMainQuestContent] = useState<MainQuestContent | null>(null);
  const { updateProgress } = useAchievements();
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    if (worldId && levelId) {
      let content;
      if (worldId === '1') {
        content = world1MainQuest.find((content) => content.levelId === Number(levelId));
      } else if (worldId === '2') {
        content = world2MainQuest.find((content) => content.levelId === Number(levelId));
      }
      setMainQuestContent(content || null);
    }
  }, [worldId, levelId]);

  const handleNextDialog = () => {
    if (mainQuestContent && currentDialogIndex < mainQuestContent.dialogs.length - 1) {
      setDirection(1);
      setCurrentDialogIndex(currentDialogIndex + 1);
      updateProgress.completeDialog();
    }
  };

  const handlePrevDialog = () => {
    if (currentDialogIndex > 0) {
      setDirection(-1);
      setCurrentDialogIndex(currentDialogIndex - 1);
    }
  };

  const handleNextCuriosity = () => {
    if (mainQuestContent && currentCuriosityIndex < mainQuestContent.curiosities.length - 1) {
      setCurrentCuriosityIndex(currentCuriosityIndex + 1);
      updateProgress.readCuriosity();
    }
  };

  const handleComplete = () => {
    if (worldId && mainQuestContent) {
      updateProgress.completeLevel(mainQuestContent.levelId);
      navigate(`/levels/${worldId}`);
    }
  };

  const renderDialog = (dialog: Dialog) => {
    const { character, text } = dialog;
    const characterImage = characterImages[character.name];
    const isRight = character.position === 'right';
    
    return (
      <motion.div 
        className={`dialog-container ${character.position || 'left'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div 
          className="character-portrait"
          initial={{ 
            opacity: 0,
            x: isRight ? 100 : -100,
            scale: 0.95
          }}
          animate={{ 
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
              type: "spring",
              stiffness: 200,
              damping: 20,
              mass: 0.8,
              duration: 0.4
            }
          }}
          exit={{
            opacity: 0,
            x: isRight ? -100 : 100,
            scale: 0.95,
            transition: { duration: 0.2 }
          }}
        >
          <motion.img 
            src={characterImage} 
            alt={character.name}
            initial={{ scale: 0.9 }}
            animate={{ 
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 250,
                damping: 15,
                mass: 0.5
              }
            }}
            style={{ pointerEvents: 'none' }}
          />
        </motion.div>
        
        <motion.div 
          className="dialog-content"
          initial={{ 
            opacity: 0, 
            x: isRight ? -50 : 50,
            scale: 0.98
          }}
          animate={{ 
            opacity: 1, 
            x: 0,
            scale: 1,
            transition: {
              type: "spring",
              stiffness: 170,
              damping: 15,
              mass: 0.6,
              duration: 0.3
            }
          }}
          exit={{
            opacity: 0,
            x: isRight ? 50 : -50,
            scale: 0.98,
            transition: { duration: 0.2 }
          }}
        >
          <motion.div 
            className="character-name"
            initial={{ opacity: 0, y: -10 }}
            animate={{ 
              opacity: 1,
              y: 0,
              transition: { 
                type: "spring",
                stiffness: 200,
                damping: 15,
                duration: 0.2
              }
            }}
          >
            {character.name}
          </motion.div>
          <motion.div 
            className="dialog-text"
            initial={{ opacity: 0, y: 10 }}
            animate={{ 
              opacity: 1,
              y: 0,
              transition: { 
                type: "spring",
                stiffness: 150,
                damping: 15,
                delay: 0.1,
                duration: 0.2
              }
            }}
          >
            {text}
          </motion.div>
        </motion.div>
      </motion.div>
    );
  };

  const renderProgressIndicators = () => {
    if (!mainQuestContent) return null;
    
    return (
      <div className="dialog-progress">
        {mainQuestContent.dialogs.map((_, index) => (
          <motion.div 
            key={index}
            className={`progress-dot ${index <= currentDialogIndex ? 'active' : ''}`}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ 
              scale: index <= currentDialogIndex ? 1.2 : 1,
              opacity: 1
            }}
            transition={{ delay: index * 0.1 }}
          />
        ))}
      </div>
    );
  };

  if (!mainQuestContent) {
    return (
      <motion.div 
        className="main-quest-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.div className="main-quest-content" variants={contentVariants}>
          <h2>Conteúdo não encontrado</h2>
          <motion.button 
            onClick={() => navigate(`/levels/${worldId}`)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Voltar
          </motion.button>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <div className="main-quest-container">
      <StarBackground />
      <motion.div 
        className="main-quest-content"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div 
          className="quest-header"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.h2
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            Nível {levelId}
          </motion.h2>
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {renderProgressIndicators()}
          </motion.div>
        </motion.div>

        <div className="dialogs-wrapper">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentDialogIndex}
              custom={direction}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={{
                initial: (d: number) => ({
                  opacity: 0,
                  x: d > 0 ? 100 : -100,
                  scale: 0.95
                }),
                animate: {
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    duration: 0.4
                  }
                },
                exit: (d: number) => ({
                  opacity: 0,
                  x: d > 0 ? -100 : 100,
                  scale: 0.95,
                  transition: { duration: 0.2 }
                })
              }}
              className="dialog-navigation"
            >
              {mainQuestContent && currentDialogIndex < mainQuestContent.dialogs.length && 
                renderDialog(mainQuestContent.dialogs[currentDialogIndex])}
              
              <motion.div 
                className="navigation-hints"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {currentDialogIndex > 0 && (
                  <motion.div 
                    className="nav-hint left"
                    whileHover={{ x: -5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handlePrevDialog}
                  >
                    <FaArrowRight style={{ transform: 'rotate(180deg)' }} />
                  </motion.div>
                )}
                {currentDialogIndex < mainQuestContent.dialogs.length - 1 && (
                  <motion.div 
                    className="nav-hint right"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleNextDialog}
                  >
                    <FaArrowRight />
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div 
          className="curiosities-section"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.h3
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <FaBook /> Descobertas Cósmicas
          </motion.h3>
          <AnimatePresence mode="wait">
            <motion.p
              key={currentCuriosityIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              {mainQuestContent.curiosities[currentCuriosityIndex]}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        <motion.div 
          className="quest-controls"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {currentDialogIndex > 0 && (
            <motion.button
              className="prev-button"
              onClick={handlePrevDialog}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Diálogo Anterior
            </motion.button>
          )}
          
          {currentDialogIndex < mainQuestContent.dialogs.length - 1 ? (
            <motion.button
              className="next-button"
              onClick={handleNextDialog}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Próximo Diálogo <FaArrowRight />
            </motion.button>
          ) : currentCuriosityIndex < mainQuestContent.curiosities.length - 1 ? (
            <motion.button
              className="next-button"
              onClick={handleNextCuriosity}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Próxima Descoberta <FaStar />
            </motion.button>
          ) : (
            <motion.button
              className="complete-button"
              onClick={handleComplete}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Concluir Nível <FaStar />
            </motion.button>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MainQuest;