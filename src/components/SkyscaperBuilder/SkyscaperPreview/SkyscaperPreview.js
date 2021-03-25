import classes from "./SkyscaperPreview.module.css";
import SkyscaperLevel from "../SkyscaperLevel/SkyscaperLevel";
const  SkyscaperPreview = ({levels}) => {
    const result = [];

for (const level in levels){
    for (let i=0; i<levels[level]; i++){
    result.push(<SkyscaperLevel key={level + i}  type={level}/>)
}
}
//     return (
//         <div className={classes.SkyscaperPreview}>
//       <div
//         className={classes.levels}
//         style={{ backgroundColor: yelow }  }>
//         {result}
//       </div>
//     </div>
//     )
// }

return ( 
    <div className = {classes.SkyscaperPreview}>
        <div className={classes.levels}>
            {result}
        </div>
    </div>
);
}
export default SkyscaperPreview;



 
