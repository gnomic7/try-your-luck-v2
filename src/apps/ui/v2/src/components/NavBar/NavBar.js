import React from 'react';
import './NavBar.css';
const NavBar = ({ userLoggedIn }) => {
  return (
    <header className="navBar">
      <nav>
        {!userLoggedIn && (
          <a href="/" onClick={() => alert('Hi Shreyanshi')}>
            Login
          </a>
        )}
        {!userLoggedIn && <a href="/">Register</a>}
        {userLoggedIn && <a href="/">Logout</a>}
      </nav>
    </header>
  );
};
export default NavBar;
