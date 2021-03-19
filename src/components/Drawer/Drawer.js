import classes from "./Drawer.module.css";
import Nav from "../Nav/Nav"
import Logo from "../Logo/Logo"
import Backdrop from "../UI/Backdrop/Backdrop";

const Drawer = () => {
    return (
        <div className={classes.Drawer}>
            <Backdrop />
            <div className={classes.content}>
        <Logo />
        <Nav />
        </div>
        </div>
    )
}
export default Drawer;