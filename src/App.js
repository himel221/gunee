import { Routes, Route } from 'react-router-dom';  // Remove Router import
import Home from './pages/home.jsx';

function App() {
  return (
    <Routes>  {/* No Router wrapper */}
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;