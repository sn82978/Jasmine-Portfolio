import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://github.com/jasminemarwaha1234" target="_blank" rel="noopener noreferrer">
          <img src="/github.png" alt="GitHub" className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/jasmine-marwaha/" target="_blank" rel="noopener noreferrer">
          <img src="/linkedin.png" alt="LinkedIn" className="social-icon" />
        </a>
      </div>
      <a href="https://github.com/sn82978/Jasmine-Portfolio">Source Code</a>
<p>Made with Vite+React, hosted on GitHub Pages</p>
<p>© 2025 Shreya Nakum. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
