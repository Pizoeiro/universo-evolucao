import { useState, useEffect, useMemo } from 'react';
import { Achievement, CategoryFilter } from '../../types/achievements';
import { useAchievements } from '../../hooks/useAchievements';
import { achievements } from '../../data/achievements/achievements';
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

const Achievements = () => {
  const { userProgress, getUnlockedAchievements, getAchievementProgress } = useAchievements();
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const [notification, setNotification] = useState<string | null>(null);
  const [previousUnlocked, setPreviousUnlocked] = useState<number>(0);
  const [searchTerm, setSearchTerm] = useState('');
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
    const uniqueTitles = new Set<string>();

    let filtered = achievements.filter((achievement) => {
      const categoryMatch = selectedCategory === 'all' || achievement.category === selectedCategory;
      const searchMatch = achievement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         achievement.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const isWorldMasterAchievement = achievement.id.startsWith('world_master');
      
      if (isWorldMasterAchievement) {
        if (uniqueTitles.has(achievement.title)) {
          return false; 
        }
        uniqueTitles.add(achievement.title);
      }
      
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

  const displayedAchievements = filteredAndSortedAchievements;

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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {displayedAchievements.map(renderAchievementCard)}
      </motion.div>
    </div>
  );
};

export default Achievements;
