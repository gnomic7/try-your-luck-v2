import { useMutation } from '@apollo/client';

import Registration from './Registration';
import { TEAM_MEMBER_ADD } from '../../queries';

const RegistrationContainer = ({ open, handleClose }) => {
  const [updateTeamMember, { loading, error, data }] =
    useMutation(TEAM_MEMBER_ADD);

  const handleRegistration = (register) => () => {
    const { password, confirmPassword, userName, firstName, lastName } =
      register;
    if (password !== confirmPassword) {
      alert('Passwords did not match');
      return;
    }
    if (!loading && !error) {
      updateTeamMember({
        variables: { userName, password, firstName, lastName },
      });
      console.log(data);
    }
    alert('Member Added!');
    handleClose();
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
