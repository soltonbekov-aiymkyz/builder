
import classes from "./SkyscaperControls.module.css";

const SkyscaperControls = ({levels}) => {
  const result =[];
  for(const level in levels){
    result.push(level)
  }
  return (
    <div className={classes.SkyscaperControls}>Controls</div>
  );
}
export default SkyscaperControls;

// import classes from "./BunsControls.module.css";

// const BunsControls = () => {
//     return ( 
//         <div className = {classes.BunsControls}>Controls</div>
//     );
// }
 
// export default BunsControls;