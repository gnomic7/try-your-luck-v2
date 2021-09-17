import { Button, DialogContentText } from '@material-ui/core';

import { TryModal } from '../TryModal';

const LogoutBody = () => (
  <>
    <DialogContentText>
      Once you logout, your score would not be saved for future reference. Are
      you sure you want to logout?
    </DialogContentText>
  </>
);
const LogoutFooter = ({ handleClose, handleLogout }) => (
  <>
    <Button onClick={handleClose} color="primary">
      Cancel
    </Button>
    <Button onClick={handleLogout} color="primary">
      Logout
    </Button>
  </>
);
const Logout = ({ open, handleClose, handleLogout }) => {
  const footerProps = { handleClose, handleLogout };
  return (
    <TryModal
      open={open}
      onClose={handleClose}
      modalTitle="Logout"
      modalContent={<LogoutBody />}
      modalFooter={<LogoutFooter {...footerProps} />}
    />
  );
};
export default Logout;
