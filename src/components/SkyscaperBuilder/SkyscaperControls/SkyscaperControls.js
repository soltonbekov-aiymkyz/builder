
import classes from "./SkyscaperControl/SkyscaperControl";

import classes from "./SkyscaperControls.module.css";
const SkyscaperControls = ({levels}) => {
  const result =[];
  for(const level in levels){
    result.push(<SkyscaperControl type={level} />)
  }
  return (
    <div className={classes.SkyscaperControls}>{results}</div>
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