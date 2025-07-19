import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './pages/not-found/NotFound';
import HomePage from './pages/home-page/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
