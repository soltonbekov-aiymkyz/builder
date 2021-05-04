
import { useDispatch } from "react-redux";
import Button from "../../../UI/Button/Button";
import SkyscaperLevel from "../../SkyscaperLevel/SkyscaperLevel";
import classes from "./SkyscaperControl.module.css";
const SkyscaperControl = ({ type, count }) => {
    const dispatch = useDispatch();
return (
    <div className={classes.SkyscaperControl}>
      <Button onClick={() => dispatch({ type: "ADD_LEVEL", level: type })}>+</Button>
      <div className={classes.level}>
        <SkyscaperLevel type={type} fixed />
      </div>
      <Button onClick={() => dispatch({ type: "REMOVE_LEVEL", level: type })} disabled={!count}>-</Button>
    </div>
  );
}
export default SkyscaperControl;




// import classes from "./SkyscaperControl.module.css";
// const SkyscaperControl = ({ type, addLevel, removeLevel }) => {
//     const name ={
//         floor1: "Guest house",
//    floor2:"library",
//    floor3:"shopping",
//    floor4:"flower shop",
//    floor5:"plant house",
//     }
//    return ( 
//        <div className = {classes.SkyscaperControl}>
//            <button className = {classes.ControlButton} onClick = {() => removeLevel(type)}>-</button>
//            {name[type]}
//            <button className = {classes.ControlButton} onClick = {() => addLevel(type)}>+</button>
//        </div>
//    );
// }
// export default SkyscaperControl;















// import { useDispatch } from "react-redux";
// import Button from "../../../UI/Button/Button";
// import SkyscaperLevel from "../../SkyscaperLevel/SkyscaperLevel";
// import classes from "./SkyscaperControl.module.css";

// const SkyscaperControl = ({ type,count }) => {
//     const  dispatch = useDispatch();
//    return ( 
//        <div className = {classes.SkyscaperControl}>
        
//            <button className = {classes.ControlButton} onClick = {() => dispatch({type: "REMOVE_LEVEL", level: type})} disabled={!count}  >-</button>
//             <SkyscaperLevel type={type} fixed />
//            <button className = {classes.ControlButton} onClick = {() => dis({type:"ADD_LEVEL", level: type})}>+</button>
     
     
//            </div>
//    );
// }
// export default SkyscaperControl;