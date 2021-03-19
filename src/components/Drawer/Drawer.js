import classes from "./Drawer.module.css";
import Nav from "../Nav/Nav"
import Logo from "../Logo/Logo"
const Drawer = () => {
    return (
        <div className={classes.Drawer}>
        <Logo />
        <Nav />
        </div>
    )
}
export default Drawer;