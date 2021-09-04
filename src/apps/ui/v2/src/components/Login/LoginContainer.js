import Login from './Login';

const LoginContainer = ({ handleModalClose, handleModalOpen, classes }) => {
  return (
    <Login
      handleClose={handleModalClose}
      open={handleModalOpen}
      classes={classes}
    />
  );
};

export default LoginContainer;
