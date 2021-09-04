import NavBar from './NavBar';
// import { Registration } from '../Registration';
// import { Login } from '../Login';

const NavBarContainer = () => {
  const userLoggedIn = false;

  return <NavBar userLoggedIn={userLoggedIn} />;
};

export default NavBarContainer;
