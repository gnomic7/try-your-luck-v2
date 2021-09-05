import React, { useState } from 'react';
import { Login } from '../Login';
import { Registration } from '../Registration';
import './NavBar.css';
const NavBar = ({ userLoggedIn, setUserLoggedIn }) => {
  const [open, setOpen] = useState(false);
  const [clickedItem, setClickedItem] = useState('');
  const handleLoginClick = (e) => {
    e.preventDefault();
    setOpen(true);
    setClickedItem('login');
  };
  const handleRegistrationClick = (e) => {
    e.preventDefault();
    setOpen(true);
    setClickedItem('regitration');
  };
  const handleLogoutClick = (e) => {
    e.preventDefault();
    setOpen(true);
    setClickedItem('logout');
  };
  const handleClose = () => setOpen(false);
  return (
    <header className="navBar">
      <nav>
        {!userLoggedIn && (
          <a href="/" onClick={handleLoginClick}>
            Login
          </a>
        )}
        {clickedItem === 'login' && (
          <Login
            open={open}
            userLoggedIn={userLoggedIn}
            handleClose={handleClose}
            setUserLoggedIn={setUserLoggedIn}
          />
        )}
        {!userLoggedIn && (
          <a href="/" onClick={handleRegistrationClick}>
            Register
          </a>
        )}
        {clickedItem === 'regitration' && (
          <Registration open={open} handleClose={handleClose} />
        )}
        {userLoggedIn && (
          <a href="/" onClick={handleLogoutClick}>
            Logout
          </a>
        )}
        {clickedItem === 'logout' && (
          <Registration open={open} handleClose={handleClose} />
        )}
      </nav>
    </header>
  );
};
export default NavBar;
