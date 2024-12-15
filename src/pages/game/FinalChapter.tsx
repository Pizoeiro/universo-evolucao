import React, { Suspense } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { IoArrowBack } from 'react-icons/io5';
import StarBackground from './StarBackground';
import './FinalChapter.css';

// Importação dinâmica dos capítulos finais
const World1FinalChapter = React.lazy(() => import('../../data/levels/world1/World1FinalChapter'));
const World2FinalChapter = React.lazy(() => import('../../data/levels/world2/World2FinalChapter'));
const World3FinalChapter = React.lazy(() => import('../../data/levels/world3/World3FinalChapter'));
const World4FinalChapter = React.lazy(() => import('../../data/levels/world4/World4FinalChapter'));
const World5FinalChapter = React.lazy(() => import('../../data/levels/world5/World5FinalChapter'));

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

const FinalChapter: React.FC = () => {
  const { worldId } = useParams();
  const navigate = useNavigate();

  const getWorldTitle = () => {
    switch (worldId) {
      case "1":
        return "O Tear Quântico";
      case "2":
        return "A Chama da Criação";
      case "3":
        return "O Prisma do Tempo";
      case "4":
        return "As Sementes Estelares";
      case "5":
        return "O Compasso do Infinito";
      default:
        return "";
    }
  };

  const getWorldImage = () => {
    switch (worldId) {
      case "1":
        return "/assets/Mundos/Mundo1.png";
      case "2":
        return "/assets/Mundos/Mundo2.png";
      case "3":
        return "/assets/Mundos/Mundo3.png";
      case "4":
        return "/assets/Mundos/Mundo4.png";
      case "5":
        return "/assets/Mundos/Mundo5.png";
      default:
        return "";
    }
  };

  const getFinalChapterContent = () => {
    switch (worldId) {
      case "1":
        return <World1FinalChapter />;
      case "2":
        return <World2FinalChapter />;
      case "3":
        return <World3FinalChapter />;
      case "4":
        return <World4FinalChapter />;
      case "5":
        return <World5FinalChapter />;
      default:
        return null;
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="final-chapter-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <StarBackground />
        
        <motion.div 
          className="final-chapter-content"
          variants={contentVariants}
        >
          <div className="chapter-header">
            <motion.button
              className="back-button"
              onClick={() => navigate(`/levels/${worldId}`)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <IoArrowBack />
              Voltar
            </motion.button>
            <h2>{getWorldTitle()}: A História Completa</h2>
          </div>

          <motion.div
            className="chapter-banner"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="banner-overlay"></div>
            <img src={getWorldImage()} alt={`Banner do ${getWorldTitle()}`} />
          </motion.div>
          
          <motion.div
            className="chapter-story"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Suspense fallback={
              <div className="loading">
                <div className="loading-spinner"></div>
                <div className="loading-text">Carregando história...</div>
              </div>
            }>
              {getFinalChapterContent()}
            </Suspense>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FinalChapter;
