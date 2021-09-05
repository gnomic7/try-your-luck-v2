// import { useState } from 'react';
import Login from './Login';

const LoginContainer = ({ setUserLoggedIn, open, handleClose }) => {
  const handleLogin = (login) => () => {
    // setUserLoggedIn(true);
    console.log('Gonna handle login');
    console.log(login);
    handleClose();
  };
  return (
    <Login open={open} handleLogin={handleLogin} handleClose={handleClose} />
  );
};

export default LoginContainer;
