import React from 'react';
import TryModal from './TryModal';

const TryModalContainer = ({
  open,
  handleClose,
  modalTitle,
  modalContent,
  modalFooter,
}) => (
  <TryModal
    open={open}
    handleClose={handleClose}
    modalTitle={modalTitle}
    modalContent={modalContent}
    modalFooter={modalFooter}
  />
);

export default TryModalContainer;
