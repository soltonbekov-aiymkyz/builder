import classes from "./SkyscaperPreview.module.css";
import SkyscaperLevel from "../SkyscaperLevel/SkyscaperLevel";

// import  Clouds from "./video/Clouds.mp4"

const  SkyscaperPreview = ({levels,price}) => {
    const result = [];
for (const level in levels){
    for (let i=0; i<levels[level]; i++){
    result.push(<SkyscaperLevel  key={level + i} type={level}/>)
}
}
return ( 
    <div className = {classes.SkyscaperPreview}>
     {/* <video  autoPlay loop muted  >
         <source src={Clouds} type="video/mp4" />
     </video> */}
        <div className={classes.levels}>
            <div
            className ={classes.levels}/>
            {result}
        </div>
    <div className={classes.price}>{price.toFixed(1)}som</div>
    </div>
);}
export default SkyscaperPreview;
 
