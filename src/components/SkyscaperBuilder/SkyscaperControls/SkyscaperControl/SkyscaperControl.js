
 import Button from "../../../UI/Button/Button";
import SkyscaperLevel from "../../SkyscaperLevel/SkyscaperLevel";
import classes from "./SkyscaperControl.module.css";
const SkyscaperControl = ({ type,addLevel,removeLevel }) => {
    return ( 
       <div className = {classes.SkyscaperControl}>
            <button    className = {classes.ControlButton}  onClick={()=>addLevel(type)}>+</button>
            <div className={classes.level}>
            <SkyscaperLevel type={type}  fixed />
            </div>
            <button className = {classes.ControlButton}  onClick={()=>removeLevel(type)}  >-</button>
        </div>
    );
}
export default SkyscaperControl;





// import Button from "../../../UI/Button/Button";
// import PizzaIngredient from "../../PizzaIngredient/PizzaIngredient";
// import classes from "./PizzaControl.module.css";

// const PizzaControl = ({ type, add, remove }) => {
//   return (
//     <div className={classes.PizzaControl}>
//       <Button onClick={() => add(type)}>+</Button>
//       <div className={classes.ingredient}>
//         <PizzaIngredient type={type} fixed />
//       </div>
//       <Button onClick={() => remove(type)}>-</Button>
//     </div>
//   );
// }

// export default PizzaControl;

