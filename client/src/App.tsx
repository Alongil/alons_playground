import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './pages/not-found/not-found';
import HomePage from './pages/home-page/home';

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
