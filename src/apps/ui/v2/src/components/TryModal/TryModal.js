import React from 'react';
import {
  DialogActions,
  Dialog,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';

const TryModal = ({
  open,
  handleClose,
  modalTitle,
  modalContent,
  modalFooter,
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">{modalTitle}</DialogTitle>
      <DialogContent>{modalContent}</DialogContent>
      <DialogActions>{modalFooter}</DialogActions>
    </Dialog>
  );
};
export default TryModal;
