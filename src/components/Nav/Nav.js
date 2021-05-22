import { useSelector } from "react-redux";
import classes from "./Nav.module.css";
import NavItem from "./NavItem/NavItem";

const Nav = () => {
  const isAuthenticated = useSelector(state => state.auth.token !== null);

  return (
    <ul className={classes.Nav}>
      <NavItem url="/" exact>Builder</NavItem>
      { !isAuthenticated ? <NavItem url="/auth">Login</NavItem> : null}
      { isAuthenticated ? <NavItem url="/orders">Orders</NavItem> : null}
      { isAuthenticated ? <NavItem url="/logout">Logout</NavItem> : null}
    </ul>
  );
}

export default Nav;