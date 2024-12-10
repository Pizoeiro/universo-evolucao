import { useState, useEffect, useMemo } from 'react';
import { Achievement, CategoryFilter } from '../../types/achievements';
import { useAchievements } from '../../hooks/useAchievements';
import { achievements } from '../../config/achievements/achievements';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaSort, FaStar, FaTrophy, FaLock, FaUnlock } from 'react-icons/fa';
import './Achievements.css';

const AchievementNotification = ({ title }: { title: string }) => (
  <motion.div 
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -100, opacity: 0 }}
    className="achievement-notification"
  >
    <span>🏆 Conquista Desbloqueada: {title}</span>
  </motion.div>
);

const ITEMS_PER_PAGE = 12;

const Achievements = () => {
  const { userProgress, getUnlockedAchievements, getAchievementProgress } = useAchievements();
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const [notification, setNotification] = useState<string | null>(null);
  const [previousUnlocked, setPreviousUnlocked] = useState<number>(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortCriteria, setSortCriteria] = useState<'name' | 'points' | 'progress'>('name');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const categories: { id: CategoryFilter; label: string; icon: JSX.Element }[] = [
    { id: 'all', label: 'Todas', icon: <FaTrophy /> },
    { id: 'exploration', label: 'Exploração', icon: <FaSearch /> },
    { id: 'knowledge', label: 'Conhecimento', icon: <FaStar /> },
    { id: 'dedication', label: 'Dedicação', icon: <FaTrophy /> },
    { id: 'perfection', label: 'Perfeição', icon: <FaStar /> },
    { id: 'mastery', label: 'Maestria', icon: <FaTrophy /> },
    { id: 'legendary', label: 'Lendário', icon: <FaStar /> }
  ];

  useEffect(() => {
    const unlockedCount = getUnlockedAchievements().length;
    if (unlockedCount > previousUnlocked) {
      const newAchievements = getUnlockedAchievements().slice(previousUnlocked);
      newAchievements.forEach((achievement) => {
        setNotification(achievement.title);
        setTimeout(() => setNotification(null), 3000);
      });
    }
    setPreviousUnlocked(unlockedCount);
  }, [userProgress, getUnlockedAchievements]);

  const filteredAndSortedAchievements = useMemo(() => {
    let filtered = achievements.filter((achievement) => {
      const categoryMatch = selectedCategory === 'all' || achievement.category === selectedCategory;
      const searchMatch = achievement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         achievement.description.toLowerCase().includes(searchTerm.toLowerCase());
      return categoryMatch && searchMatch;
    });

    return filtered.sort((a, b) => {
      const isUnlockedA = userProgress.achievements[a.id]?.isUnlocked;
      const isUnlockedB = userProgress.achievements[b.id]?.isUnlocked;

      if (sortCriteria === 'name') {
        return sortDirection === 'asc' 
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title);
      }
      
      if (sortCriteria === 'points') {
        return sortDirection === 'asc'
          ? a.rewardPoints - b.rewardPoints
          : b.rewardPoints - a.rewardPoints;
      }

      // Sort by progress and unlock status
      const progressA = getAchievementProgress(a.id)?.percentage || 0;
      const progressB = getAchievementProgress(b.id)?.percentage || 0;
      
      if (isUnlockedA !== isUnlockedB) {
        return isUnlockedA ? -1 : 1;
      }
      
      return sortDirection === 'asc'
        ? progressA - progressB
        : progressB - progressA;
    });
  }, [achievements, selectedCategory, searchTerm, sortCriteria, sortDirection, userProgress]);

  const paginatedAchievements = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredAndSortedAchievements.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredAndSortedAchievements, currentPage]);

  const totalPages = Math.ceil(filteredAndSortedAchievements.length / ITEMS_PER_PAGE);

  const renderStats = () => (
    <div className="achievements-stats">
      <motion.div 
        className="stat-card"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <h3>Fragmentos do Tempo</h3>
        <p>{userProgress.totalPoints}</p>
      </motion.div>
      <motion.div 
        className="stat-card"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <h3>Conquistas</h3>
        <p>{getUnlockedAchievements().length} / {achievements.length}</p>
      </motion.div>
    </div>
  );

  const renderAchievementCard = (achievement: Achievement) => {
    const progress = getAchievementProgress(achievement.id);
    const isUnlocked = userProgress.achievements[achievement.id]?.isUnlocked;

    return (
      <motion.div 
        key={achievement.id}
        className={`achievement-card ${isUnlocked ? 'unlocked' : 'locked'}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        <div className="achievement-status-icon">
          {isUnlocked ? <FaUnlock /> : <FaLock />}
        </div>
        <div className="achievement-points">
          {achievement.rewardPoints} Fragmentos
        </div>
        <div className="achievement-icon">
          {achievement.icon}
        </div>
        <h3 className="achievement-title">{achievement.title}</h3>
        <p className="achievement-description">{achievement.description}</p>
        
        {progress && (
          <motion.div 
            className="achievement-progress"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
          >
            <div className="progress-bar">
              <motion.div 
                className="progress-fill" 
                initial={{ width: 0 }}
                animate={{ width: `${progress.percentage}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
            <div className="progress-text">
              <span>{progress.current} / {progress.max}</span>
              <span>{progress.percentage.toFixed(0)}%</span>
            </div>
          </motion.div>
        )}
      </motion.div>
    );
  };

  return (
    <div className="achievements-container">
      <AnimatePresence>
        {notification && <AchievementNotification title={notification} />}
      </AnimatePresence>

      <motion.div 
        className="achievements-header"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h1>Conquistas</h1>
        {renderStats()}
      </motion.div>

      <div className="achievements-controls">
        <div className="search-bar">
          <FaSearch />
          <input
            type="text"
            placeholder="Pesquisar conquistas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="sort-controls">
          <select 
            value={sortCriteria}
            onChange={(e) => setSortCriteria(e.target.value as any)}
          >
            <option value="name">Nome</option>
            <option value="points">Fragmentos</option>
            <option value="progress">Progresso</option>
          </select>
          <button 
            onClick={() => setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc')}
            className="sort-direction"
          >
            <FaSort />
          </button>
        </div>
      </div>

      <div className="achievements-categories">
        {categories.map((category) => (
          <motion.button
            key={category.id}
            className={`category-button ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.icon}
            {category.label}
          </motion.button>
        ))}
      </div>

      <motion.div 
        className="achievements-grid"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {paginatedAchievements.map(renderAchievementCard)}
      </motion.div>

      {totalPages > 1 && (
        <div className="pagination">
          <button 
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
          >
            Anterior
          </button>
          <span>{currentPage} de {totalPages}</span>
          <button 
            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
          >
            Próxima
          </button>
        </div>
      )}
    </div>
  );
};

export default Achievements;
