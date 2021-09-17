import { useContext } from 'react';
import { useMutation } from '@apollo/client';
import { UserContext, ErrorContext } from '../WithLayout';
import Login from './Login';
import { TEAM_MEMBERS_LOGIN } from '../../queries';

const LoginContainer = ({ open, handleClose }) => {
  const [teamMemberLogin, { error: apiError }] =
    useMutation(TEAM_MEMBERS_LOGIN);

  const [user, setUser] = useContext(UserContext);
  const [, setError] = useContext(ErrorContext);
  // if (loading) return
  if (apiError) return setError('Login not found! Please try again.');

  const handleLogin = (login) => async () => {
    const { userName, password } = login;
    try {
      teamMemberLogin({
        variables: { userName, password },
        update(_, result) {
          const { accessToken, id, displayName } =
            result?.data?.teamMemberLogin;
          const props = { displayName, id, userName };
          setUser({
            ...user,
            accessToken,
            userLoggedIn: true,
            props,
          });
          localStorage.setItem('token', accessToken ?? '');
          localStorage.setItem('user', JSON.stringify({ props }));
        },
      });
      setError('');
    } catch (err) {
      setError(
        'Authentication failed! Please check the email/password and retry again.',
      );
    }
    handleClose();
    return null;
  };
  return (
    <Login open={open} handleLogin={handleLogin} handleClose={handleClose} />
  );
};

export default LoginContainer;
