import Registration from './Registration';

const RegistrationContainer = ({ open, handleClose }) => {
  const handleRegistration = () => {
    console.log('Gonna handle registration');
  };
  return (
    <Registration
      open={open}
      handleClose={handleClose}
      handleRegistration={handleRegistration}
    />
  );
};

export default RegistrationContainer;
