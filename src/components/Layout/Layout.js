import classes from "./Layout.module.css";
import Toolbar from "../Toolbar/Toolbar";
import Drawer from "../Drawer/Drawer";

const Layout =({ children }) => {
    return (
        <div className={classes.Layout}>
            <Toolbar />
            <Drawer />
      {children}
        </div>
    )
}
export default Layout;