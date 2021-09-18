import { useContext } from 'react';
import { useMutation } from '@apollo/client';
import { UserContext, ErrorContext } from '../WithLayout';
import Login from './Login';
import { TEAM_MEMBERS_LOGIN } from '../../queries';

const LoginContainer = ({ open, handleClose }) => {
  const [user, setUser] = useContext(UserContext);
  const [, setError] = useContext(ErrorContext);

  const [teamMemberLogin, { loading, error: apiError }] =
    useMutation(TEAM_MEMBERS_LOGIN);

  if (loading) return '';
  if (apiError) {
    setError(
      `${apiError.message} - Authentication failed! Please check the email/password and retry again.`,
    );
    return '';
  }
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
    } catch (err) {}
    handleClose();
  };
  return (
    <Login open={open} handleLogin={handleLogin} handleClose={handleClose} />
  );
};

export default LoginContainer;
