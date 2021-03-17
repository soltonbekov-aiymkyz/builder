import classes from "./Layout.module.css"
import Toolbar from "..Toolbar.module.css"
const Layout =({ children }) => {
    return (
        <div className={classes.Layout}>
      {children}
        </div>
    )
}

export default Layout;