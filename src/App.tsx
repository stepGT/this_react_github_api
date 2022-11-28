import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/FavoritesPage';
import FavoritesPage from './pages/HomePage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
    </Routes>
  );
};

export default App;
