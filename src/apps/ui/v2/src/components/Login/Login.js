import React from 'react';
import { Button, TextField, DialogContentText } from '@material-ui/core';

import { TryModal } from '../TryModal';
const login = { username: '', password: '' };
const LoginBody = () => (
  <>
    <DialogContentText>
      In order to persist your score and display at the top of your friend's
      score board - please login and save the data
    </DialogContentText>
    <TextField
      autoFocus
      margin="dense"
      id="username"
      label="Email Address"
      type="email"
      onBlur={(e) => (login.username = e.target.value)}
      fullWidth
    />
    <TextField
      autoFocus
      margin="dense"
      id="password"
      label="Password"
      type="password"
      onBlur={(e) => (login.password = e.target.value)}
      fullWidth
    />
  </>
);
const LoginFooter = ({ handleLogin, handleClose }) => (
  <>
    <Button onClick={handleClose} color="primary">
      Cancel
    </Button>
    <Button onClick={handleLogin(login)} color="primary">
      Login
    </Button>
  </>
);
const Login = ({ userLoggedIn, open, handleClose, handleLogin }) => {
  const footerProps = { handleLogin, handleClose };
  return (
    <TryModal
      open={open}
      onClose={handleClose}
      modalTitle="Login"
      modalContent={<LoginBody />}
      modalFooter={<LoginFooter {...footerProps} />}
    />
  );
};
export default Login;
