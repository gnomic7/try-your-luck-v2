import React from 'react';
import { Button, TextField, DialogContentText } from '@material-ui/core';
// import './MainHeader.css';
import { TryModal } from '../TryModal';
const register = {
  username: '',
  password: '',
  firstName: '',
  lastName: '',
};

const RegistrationBody = () => (
  <>
    <DialogContentText>
      In order to persist your score and display at the top of your friend's
      score board - please login and save the data
    </DialogContentText>
    <TextField
      autoFocus
      margin="dense"
      id="firstName"
      label="First Name"
      onBlur={(e) => (register.firstName = e.target.value)}
      type="text"
      fullWidth
    />
    <TextField
      autoFocus
      margin="dense"
      id="lastName"
      label="Last Name"
      onBlur={(e) => (register.lastName = e.target.value)}
      type="text"
      fullWidth
    />
    <TextField
      autoFocus
      margin="dense"
      id="userName"
      label="Email"
      onBlur={(e) => (register.userName = e.target.value)}
      type="email"
      fullWidth
    />
    <TextField
      autoFocus
      margin="dense"
      id="password"
      label="Password"
      onBlur={(e) => (register.password = e.target.value)}
      type="password"
      fullWidth
    />
    <TextField
      autoFocus
      margin="dense"
      id="confirmPassword"
      label="Confirm Password"
      onBlur={(e) => (register.confirmPassword = e.target.value)}
      type="password"
      fullWidth
    />
  </>
);
const RegistrationFooter = ({ handleRegistration, handleClose }) => (
  <>
    <Button onClick={handleClose} color="primary">
      Cancel
    </Button>
    <Button onClick={handleRegistration(register)} color="primary">
      Register
    </Button>
  </>
);
const Registration = ({ open, handleClose, handleRegistration }) => {
  const footerProps = { handleRegistration, handleClose };
  return (
    <TryModal
      open={open}
      onClose={handleClose}
      modalTitle="Register To Try Your Luck!"
      modalContent={<RegistrationBody />}
      modalFooter={<RegistrationFooter {...footerProps} />}
    />
  );
};

export default Registration;
