import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import DashboardList from './dashboardList';
import AddWidgetModal from './AddWidgetModal';
import './App.css';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <Link to="/">Home</Link>
          <input 
            type="text" 
            placeholder="Search..." 
            value={searchQuery} 
            onChange={handleSearchChange} 
            className="search-bar"
          />
          <button onClick={openModal} className="add-widget-button">Add Widget</button>
        </nav>
        
        <AddWidgetModal isOpen={isModalOpen} closeModal={closeModal} />
        
        <div className="dashboard-container">
          <h1>CNAPP Dashboard</h1>
          <Routes>
            <Route path="/" element={<DashboardList searchQuery={searchQuery} openModal={openModal} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
