import NavBar from './NavBar';
const NavBarContainer = ({ userLoggedIn, setUserLoggedIn }) => (
  <NavBar userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} />
);

export default NavBarContainer;
