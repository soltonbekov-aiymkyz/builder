

import classes from "./SkyscaperControl.module.css";

const SkyscaperControl = ({ type }) => {
    return ( 
        <div className = {classes.BunsControl}>
            <button className = {classes.ControlA}>-</button>
            {type}
            <button className = {classes.ControlB}>+</button>
        </div>
    );
}
 
export default SkyscaperControl;