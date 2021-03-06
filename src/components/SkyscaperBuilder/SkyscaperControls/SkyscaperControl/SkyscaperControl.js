
import { useDispatch } from "react-redux";
import Button from "../../../UI/Button/Button";
import classes from "./SkyscaperControl.module.css";
const SkyscaperControl = ({ type, count }) => {
  const dispatch = useDispatch();
  const name = {
    floor1: "Guest house",
    floor2: "library",
    floor3: "shopping",
    floor4: "flower shop",
    floor5: "plant house",
  }
  return (
    <div className={classes.SkyscaperControl}>
      <Button onClick={() => dispatch({ type: "ADD_LEVEL", level: type })}>+</Button>
      <div className={classes.level}>
        {/* <SkyscaperLevel type={type} fixed /> */}
        {name[type]}
      </div>
      <Button onClick={() => dispatch({ type: "REMOVE_LEVEL", level: type })} disabled={!count}>-</Button>
    </div>
  );
}
export default SkyscaperControl;

//autentifikasiya avtorizasiya
//optimizasiya proekta 
//





