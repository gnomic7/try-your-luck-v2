import React from 'react';
import './MainHeader.css';
const MainHeader = ({ user }) => (
  <div className="mainHeader">
    <header>
      <h2>Try Your Luck!</h2>
      <div className="welcomeMessage">Welcome {user.props.displayName}</div>
    </header>
  </div>
);
export default MainHeader;
