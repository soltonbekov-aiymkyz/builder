
// import Button from "../../../UI/Button/Button";
// import SkyscaperLevel from "../../SkyscaperLevel/SkyscaperLevel";
// import classes from "./SkyscaperControl.module.css";

// const SkyscaperControl = ({ type,addLevel,removeLevel,count }) => {
//     return ( 
//        <div className = {classes.SkyscaperControl}>
//             <button   className = {classes.ControlButton} onClick={()=>addLevel(type)}  disabled={!count}>+</button>
//            {/* <div className={classes.level}> */}
//             <SkyscaperLevel type={type}  /*fixed*/ />
//             {/* </div> */}
//             <button  className = {classes.ControlButton}  onClick={()=>removeLevel(type)}  /* disabled={!count} */ >-</button>
//         </div>
//     );
// }
// export default SkyscaperControl;



// import Button from "../../../UI/Button/Button";
// import SkyscaperLevel from "../../SkyscaperLevel/SkyscaperLevel";
// import classes from "./SkyscaperControl.module.css";

// const SkyscaperControl = ({ type,addLevel,removeLevel,count }) => {
//     return ( 
//        <div className = {classes.SkyscaperControl}>
//             <button   className = {classes.ControlButton} onClick={()=>addLevel(type)}>+</button>
//             <div className={classes.level}>
//             <SkyscaperLevel type={type}  fixed />
//             </div>
//             <button  className = {classes.ControlButton}  onClick={()=>removeLevel(type)}   disabled={!count}  >-</button>
//         </div>
//     );
// }
//  export default SkyscaperControl;



 //import Button from "../../../UI/Button/Button";
 import SkyscaperLevel from "../../SkyscaperLevel/SkyscaperLevel";
 import classes from "./SkyscaperControl.module.css";
const SkyscaperControl = ({ type, addLevel, removeLevel }) => {
    return ( 
        <div className = {classes.SkyscaperControl}>
            <button className = {classes.ControlButton} onClick = {() => removeLevel(type)}>-</button>
            <SkyscaperLevel  type = {type} >
                
            </SkyscaperLevel>
            <button className = {classes.ControlButton} onClick = {() => addLevel(type)}>+</button>
        </div>
    );
}
export default SkyscaperControl;


