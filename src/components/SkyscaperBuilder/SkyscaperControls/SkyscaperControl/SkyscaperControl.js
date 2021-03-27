



import SkyscaperLevel from "../../SkyscaperLevel/SkyscaperLevel";
import classes from "./SkyscaperControl.module.css";
const SkyscaperControl = ({ type,addLevel,removeLevel }) => {
    return ( 
        <div className = {classes.SkyscaperControl}>
            <button  className = {classes.ControlButton}  onClick={()=>addLevel(type)}>+</button>
            <SkyscaperLevel type={type} />
            <button className = {classes.ControlButton}  onClick={()=>removeLevel(type)}  >-</button>
        </div>
    );
}
 
export default SkyscaperControl;









// const BunsControl = ({ type, addIngredient, removeIngredient }) => {
//     return ( 
//         <div className = {classes.BunsControl}>
//             <button className = {classes.ControlButton} onClick = {() => removeIngredient(type)}>-</button>
//             <BunsIngredient type = {type} />
//             <button className = {classes.ControlButton} onClick = {() => addIngredient(type)}>+</button>
//         </div>
//     );
// }
 
// export default SkyscaperControl;