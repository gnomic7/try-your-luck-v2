import { useContext } from 'react';
import { UserContext } from '../WithLayout';
import Logout from './Logout';

const LogoutContainer = ({ open, handleClose }) => {
  const [user, setUser] = useContext(UserContext);
  const handleLogout = () => {
    setUser({
      ...user,
      userLoggedIn: false,
      accessToken: '',
      props: { displayName: 'Guest', id: '' },
    });
    localStorage.setItem('user', '');
    localStorage.setItem('token', '');
    handleClose();
  };
  return (
    <Logout handleClose={handleClose} open={open} handleLogout={handleLogout} />
  );
};

export default LogoutContainer;
