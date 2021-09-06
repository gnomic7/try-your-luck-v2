// import { useState } from 'react';
import { useMutation } from '@apollo/client';

import Login from './Login';
import { TEAM_MEMBERS_LOGIN } from '../../queries';

const LoginContainer = ({ setUserLoggedIn, open, handleClose }) => {
  const [teamMemberLogin, { loading, error, data }] =
    useMutation(TEAM_MEMBERS_LOGIN);

  const handleLogin = (login) => () => {
    const { userName, password } = login;
    console.log({ userName, password });
    teamMemberLogin({
      variables: { userName, password },
    });
    console.log({ loading, error, data });
    handleClose();
  };
  return (
    <Login open={open} handleLogin={handleLogin} handleClose={handleClose} />
  );
};

export default LoginContainer;
