



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







