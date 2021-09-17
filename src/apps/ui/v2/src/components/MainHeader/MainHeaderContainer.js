import { useContext } from 'react';

import MainHeader from './MainHeader';
import { UserContext } from '../WithLayout';

const MainHeaderContainer = () => {
  const [user] = useContext(UserContext);

  return <MainHeader user={user} />;
};

export default MainHeaderContainer;
