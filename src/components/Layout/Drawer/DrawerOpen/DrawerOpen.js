import classes from "./DrawerOpen.module.css";

const DrawerOpen = ({ click }) => {
  return (
    <div className={classes.DrawerOpen} onClick={click}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default DrawerOpen;