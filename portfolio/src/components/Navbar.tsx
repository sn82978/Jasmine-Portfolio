import React, { useState } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [activeTab, setActiveTab] = useState('#home');

  return (
    <nav className="navbar">
      <ul>
        <li className={activeTab === '#home' ? 'active' : ''}>
          <a 
            href="#home" 
            onClick={() => setActiveTab('#home')}
          >
            {activeTab === '#home' && <span className="bow-icon">🎀</span>}
            Home
          </a>
        </li>
        <li className={activeTab === '#experiences' ? 'active' : ''}>
          <a 
            href="#experiences" 
            onClick={() => setActiveTab('#experiences')}
          >
            {activeTab === '#experiences' && <span className="bow-icon">🎀</span>}
            Experiences
          </a>
        </li>
        <li className={activeTab === '#personal' ? 'active' : ''}>
          <a 
            href="#personal" 
            onClick={() => setActiveTab('#personal')}
          >
            {activeTab === '#personal' && <span className="bow-icon">🎀</span>}
            Personal
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;