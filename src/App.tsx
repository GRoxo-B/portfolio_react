import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Routes';
import Sidebar from './components/Sidebar';
import './style/App.css'; // Import your custom CSS

const App: React.FC = () => {
  return (
    <Router>
      <Sidebar/>
      <AppRoutes />
    </Router>
  );
};

export default App;