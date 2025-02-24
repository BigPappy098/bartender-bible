import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MyBar from './pages/MyBar';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-bar" element={<MyBar />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;