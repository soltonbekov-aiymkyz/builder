import React from "react";
import classes from "./SkyscaperPreview.module.css";
import SkyscaperLevel from "../SkyscaperLevel/SkyscaperLevel";
const  SkyscaperPreview = ({levels,price}) => {
    const result = [];
for (const level in levels){
    for (let i=0; i<levels[level]; i++){
    result.push(<SkyscaperLevel  key={level + i} type={level}/>)
}
 }  

// return ( 
//     <div className = {classes.SkyscaperPreview}>
//         <div className={classes.levels}> 
//              {/* <div className ={classes.levels}/>  */}
//              <div className={classes.rocketImage}></div>
//              <div className={classes.birdImage}></div>
//              <div className={classes.cloudImage}></div>
// {/*         <div className={classes.background}></div> */}
//              <div className={classes.cloImage}></div>
//              <div className={classes.seaImage}></div>
//              <div className={classes.tree1Image}></div>
//             {result}
//         </div>
//     <div className={classes.price}>{price.toFixed(1)}som</div>
//     </div>
// );

return ( 
    <div className = {classes.SkyscaperPreview}>
        <div className={classes.levels}> 
             <div className={classes.rocketImage}></div>
             <div className={classes.birdImage}></div>
             <div className={classes.cloudImage}></div>
             <div className={classes.cloImage}></div>
             <div className={classes.seaImage}></div>
             <div className={classes.tree1Image}></div>
             <SkyscaperLevel type="floor0" />
            {result}
        </div>
    <div className={classes.price}>{price.toFixed(1)}som</div>
    </div>
);


}
export default SkyscaperPreview;


