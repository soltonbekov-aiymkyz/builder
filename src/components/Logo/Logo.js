import classes from "./Logo.module.css";
import logo from "../../images/logosvg.svg";
const Logo = () => {
    return (
        <div className={classes.logo}>
   <img src={logo} alt="pizza" />
   <div>Pizza</div>
        </div>
    )
}

export default Logo;