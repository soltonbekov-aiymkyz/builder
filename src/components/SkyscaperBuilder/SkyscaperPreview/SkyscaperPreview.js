
import classes from "./SkyscaperPreview.module.css";
import SkyscaperLevel from "../SkyscaperLevel/SkyscaperLevel";

const  SkyscaperPreview = ({levels,price}) => {
    const result = [];
for (const level in levels){
    for (let i=0; i<levels[level]; i++){
    result.push(<SkyscaperLevel  key={level + i} type={level}/>)
}
 }


// function loop(x) {
//     if (x >= 10) // "x >= 10" — это условие для конца выполнения (тоже самое, что "!(x < 10)")
//       return;
//     // делать что-то
//     loop(x + 1); // рекурсионный вызов
//   }
//   loop(0);



//   function animation({level}) {
//     if (level == 10) 
//       return;
//     animation(level + 1);
//   }
//   animation(0);






return ( 
    <div className = {classes.SkyscaperPreview}>
    
        <div className={classes.levels}>
            <div
            className ={classes.levels}/>
            {result}
        </div>
    <div className={classes.price}>{price.toFixed(1)}som</div>
    </div>
);}
export default SkyscaperPreview;
 
 

