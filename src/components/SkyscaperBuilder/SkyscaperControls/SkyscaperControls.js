
// import Button from "../../UI/Button/Button";
// import SkyscaperControl from "./SkyscaperControl/SkyscaperControl";
// import classes from "./SkyscaperControls.module.css";

// const SkyscaperControls = ({
//   levels,
//   startOrdering
// }) => {
//   const results = [];
//   let total = 0;
//   for (const level in levels) {
//     // Add level number to totals number
//     total += levels[level];
//     // Render skyscaper control for this level
//     results.push(<SkyscaperControl
//         key={level}
//         count={levels[level]}
//         type={level} />)
//   }

//   return (
//     <div className={classes.SkyscaperControls}>
//       <strong>Levels</strong>
//       {results}
//       <Button disabled={!total} onClick={startOrdering}>Order</Button>
//     </div>
//   );
// }

// export default SkyscaperControls;

import Button from "../../UI/Button/Button";
import SkyscaperControl from "./SkyscaperControl/SkyscaperControl";
import classes from "./SkyscaperControls.module.css";

const SkyscaperControls = ({levels, startOrdering }) => {
    const results = [];
     let total = 0;
    for (const level in levels) {
        total += levels[level]
         results.push(<SkyscaperControl type={level} key={level + levels} count={levels[level]}/>)
    }
        
    return ( 
        <div className={classes.SkyscaperControls}>
           <div>
           {results}
           <div className={classes.Button}>
           <Button onClick={() => startOrdering()} disabled={!total}><span>Order</span></Button>
           </div>
           
           </div> 
        </div>
     );
}
 
export default SkyscaperControls;

