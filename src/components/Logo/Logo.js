import classes from "./Logo.module.css";
import logo from "../../components/images/logosvg.svg";

const Logo = () => {
    return (
        <div className={classes.logo}>
   <img src={logo} alt="skyscaper" />
   <div>Sckyscaper</div>
        </div>
    )
}

export default Logo;