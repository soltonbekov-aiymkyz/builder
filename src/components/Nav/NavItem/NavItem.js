
import { NavLink } from "react-router-dom";
import classes from "./NavItem.module.css";
const NavItem = ({ url, children, exact }) => {
  return (
    <li className={classes.NavItem}>
      
      <NavLink to={url} activeClassName={classes.active} exact>{children}</NavLink>
    </li>
  );
}

export default NavItem;


