
import { useState } from "react";
import classes from "./Layout.module.css";
import Toolbar from "../Toolbar/Toolbar";
import Drawer from "../Drawer/Drawer";
const Layout = ({ children }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
  
    return (
      <div className={classes.Layout}>
        <Toolbar openDrawer={() => setDrawerOpen(true)} />
        <Drawer open={drawerOpen} closeDrawer={() => setDrawerOpen(false)} />
        {children}
      </div>
    );
  }
export default Layout;
