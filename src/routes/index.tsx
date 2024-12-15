import { Route, Routes } from 'react-router-dom';
import GameLayout from '../pages/game/GameLayout';
import Universo from '../pages/game/Universo';
import WorldSelect from '../pages/game/WorldSelect';
import LevelSelect from '../pages/game/LevelSelect';
import GameBoard from '../pages/game/GameBoard';
import Rankings from '../pages/game/Rankings';
import Profile from '../pages/game/Profile';
import MainQuest from '../pages/game/MainQuest';
import Achievements from '../pages/game/Achievements';
import FinalChapter from '../pages/game/FinalChapter';
import Login from '../pages/auth/Login';
import Tutorial from '../pages/game/Tutorial';
import { useParams } from 'react-router-dom';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      
      <Route element={<GameLayout />}>
        <Route path="/" element={<Universo />} />
        <Route path="/worlds" element={<WorldSelect />} />
        <Route path="/levels/:worldId" element={<LevelSelect />} />
        <Route path="/game">
          <Route path="universo" element={<Universo />} />
          <Route path="profile" element={<Profile />} />
          <Route path=":worldId/:levelId" element={<GameBoard />} />
        </Route>
        <Route path="/rankings" element={<Rankings />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/main-quest/:worldId/:levelId" element={<MainQuest />} />
        <Route path="/main-quest/:worldId/final" element={<FinalChapter />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="*" element={<Universo />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;