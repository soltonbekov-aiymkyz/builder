
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import Backdrop from "../UI/Backdrop/Backdrop";
import classes from "./Drawer.module.css";
const Drawer = ({ open, closeDrawer }) => {
  const drawerClasses = [
    classes.content,
    open ? classes.open : classes.close
  ];

  return (
    <div className={classes.Drawer}>
      <Backdrop show={open} click={closeDrawer} />
      <div className={drawerClasses.join(" ")}>
        <Logo />
        <Nav />
      </div>
    </div>
  );
}
 
export default Drawer;
