import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/FavoritesPage';
import FavoritesPage from './pages/HomePage';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </>
  );
};

export default App;
