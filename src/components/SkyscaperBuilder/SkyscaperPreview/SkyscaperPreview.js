import classes from "./SkyscaperPreview.module.css";
import classes from "./SkyscaperLevel/SkyscaperLevel.js";
import SkyscaperLevel from "../SkyscaperLevel/SkyscaperLevel";
const  SkyscaperPreview = ({levels}) => {
    const result = [];

for (const level in levels){
    for (let i=0; i<levels[level]; i++){
    result.push(<SkyscaperLevel type={level}/>)
}
}
    return (
        <div className={classes.SkyscaperPreview}>
         {result}
        </div>
    )
}

export default SkyscaperPreview;