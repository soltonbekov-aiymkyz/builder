
import classes from "./Order.module.css";
const Order = ({ name, phone, address, levels, price }) => {
  const outinputLevels = Object.keys(levels)
    .map(level => <em key={level}>{level} - {levels[level]}</em>);
  return (
    <div className={classes.Order}>
      <div style={{fontSize:"30px", fontWeight:"bold"}}>
        <h5 style={{margin:"10px 10px"}}>{name}</h5>
        <div> {phone}</div>
        <strong>{address}</strong>
      </div>
      <div>{outinputLevels}</div>
      <strong>{price} sum</strong>
      <hr/>
    </div>
  );
}
export default Order;


