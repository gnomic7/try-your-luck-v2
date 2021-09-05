import React from 'react';
import { Button, TextField, DialogContentText } from '@material-ui/core';
// import './MainHeader.css';
import { TryModal } from '../TryModal';

const RegistrationBody = () => (
  <>
    <DialogContentText>
      In order to persist your score and display at the top of your friend's
      score board - please login and save the data
    </DialogContentText>
    <TextField
      autoFocus
      margin="dense"
      id="email"
      label="Email Address"
      type="email"
      fullWidth
    />
  </>
);
const RegistrationFooter = ({ handleRegistration, handleClose }) => (
  <>
    <Button onClick={handleClose} color="primary">
      Cancel
    </Button>
    <Button onClick={handleRegistration} color="primary">
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
