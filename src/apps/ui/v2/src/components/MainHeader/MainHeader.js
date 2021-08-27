import React from 'react';
import './MainHeader.css';
const user = 'Shreyanshi';
const MainHeader = () => (
  <div className="mainHeader">
    <header>
      <h2>Try Your Luck!</h2>
      <div className="welcomeMessage">Welcome {user}</div>
    </header>
  </div>
);
export default MainHeader;
