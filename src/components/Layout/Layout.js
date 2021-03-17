import classes from "./Layout.module.css";
import Toolbar from "./Toolbar/Toolbar";
const Layout =({ children }) => {
    return (
        <div className={classes.Layout}>
            <Toolbar />
      {children}
        </div>
    )
}

export default Layout;