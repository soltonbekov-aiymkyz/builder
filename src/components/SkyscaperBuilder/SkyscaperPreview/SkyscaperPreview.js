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



 
// import BunsIngredient from "../BunsIngredient/BunsIngredient";
// import classes from "./BunsPreview.module.css";

// const BunsPreview = ({ ingredients }) => {
//     const result =[];

//     for (const ingredient in ingredients) {
//         for (let i = 0; i < ingredients[ingredient]; i++) {
//             result.push(<BunsIngredient type = {ingredient} />)
//         }
//     }

//     return ( 
//         <div className = {classes.BunsPreview}>
//             <div className={classes.ingredients}>
//                 {result}
//             </div>
//         </div>
//     );
// }
 
// export default BunsPreview;