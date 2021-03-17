import classes from "./Layout.module.css"

const Layout =({ children }) => {
    return (
        <div className={classes.Layout}>
      {children}
        </div>
    )
}

export default Layout;