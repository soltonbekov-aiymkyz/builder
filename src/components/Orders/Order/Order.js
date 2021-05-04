
import classes from "./Order.module.css";
const Order = ({ name, phone, address, levels, price }) => {
  const outinputLevels = Object.keys(levels)
    .map(level => <em>{level} - {levels[level]}</em>);
  return (
    <div className={classes.Order}>
      <div>{name}, {phone}, {address}</div>
      <div>{outinputLevels}</div>
      <strong>{price}</strong>
    </div>
  );
}
export default Order;

