import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Experiences from './components/Experiences';
import Personal from './components/Personal';
import './App.css';
import React, { useEffect } from 'react';

const GlitterEffect: React.FC = () => {
  useEffect(() => {
    const container = document.querySelector('.glitter-container');
    if (!container) return;

    // Create 100 glitter dots
    for (let i = 0; i < 100; i++) {
      const dot = document.createElement('div');
      dot.className = 'glitter-dot';
      
      // Random positioning
      dot.style.left = `${Math.random() * 100}%`;
      dot.style.top = `${Math.random() * 100}%`;
      
      // Random animation delay
      dot.style.animationDelay = `${Math.random() * 3}s`;
      
      // Random animation duration
      dot.style.animationDuration = `${2 + Math.random() * 2}s`;
      
      container.appendChild(dot);
    }
  }, []);

  return <div className="glitter-container"></div>;
};

function App() {
  return (
    <div className="App">
      <GlitterEffect />
      <Navbar />
      <main>
        <Home />
        <Experiences />
        <Personal />
      </main>
      <Footer />
    </div>
  );
}

export default App;
