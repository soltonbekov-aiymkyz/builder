
import SkyscaperLevel from "../../SkyscaperLevel/SkyscaperLevel";
import classes from "./SkyscaperControl.module.css";
const SkyscaperControl = ({ type, addLevel, removeLevel }) => {
    const name ={
        floor1: "Guest house",
   floor2:"library",
   floor3:"shopping",
   floor4:"flower shop",
   floor5:"plant house",
    }
   return ( 
       <div className = {classes.SkyscaperControl}>
           <button className = {classes.ControlButton} onClick = {() => removeLevel(type)}>-</button>
           {/* <SkyscaperLevel  type = {type} >
               
           </SkyscaperLevel> */}
           {name[type]}
           <button className = {classes.ControlButton} onClick = {() => addLevel(type)}>+</button>
       </div>
   );
}
export default SkyscaperControl;