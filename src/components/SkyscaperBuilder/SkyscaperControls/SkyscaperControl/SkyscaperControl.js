

import classes from "./SkyscaperControl.module.css";
const SkyscaperControl = ({ type,addLevel,removeLevel }) => {
    return ( 
        <div className = {classes.SkyscaperControl}>
            <button onClick={()=>addLevel(type)}>-</button>
            <SkyscaperLevel type={type} />
            <button   onClick={()=>removeLevel(type)}  >+</button>
        </div>
    );
}
 
export default SkyscaperControl;