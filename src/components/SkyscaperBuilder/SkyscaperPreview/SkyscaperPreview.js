import classes from "./SkyscaperPreview.module.css";
import SkyscaperLevel from "../SkyscaperLevel/SkyscaperLevel";

const  SkyscaperPreview = ({levels,price}) => {
    const result = [];
for (const level in levels){
    for (let i=0; i<levels[level]; i++){
    result.push(<SkyscaperLevel  key={level + i} type={level}/>)
}

 }
 
return ( 
    <div className = {classes.SkyscaperPreview}>
        <div className={classes.levels}>
            <div
            className ={classes.levels}/>
            <div className={classes.birdImage}>
                
            </div>
            {result}
        </div>
    <div className={classes.price}>{price.toFixed(1)}som</div>
    </div>
);}
export default SkyscaperPreview;
 
 

