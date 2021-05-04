import classes from "./Button.module.css";
const Button = (props) => {
  const className = [classes.Button];
    if (props.green) {
      className.push(classes.green);
    }
  return (
    <button {...props} className={className.join(' ')}>{props.children}</button>
  );
}
export default Button;
