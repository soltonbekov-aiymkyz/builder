
 import Button from "../../UI/Button/Button";
import SkyscaperControl from "./SkyscaperControl/SkyscaperControl";
 import classes from "./SkyscaperControls.module.css";
const SkyscaperControls = ({ 
  levels,
   startOrdering
  }) => {
  const results = [];
  let total = 0;
  for (const level in levels) {
  total+= levels[level];
    results.push( <SkyscaperControl
        type={level}
        key={level}
             count={levels[level]}   /> )
  }
return (
  <div className={classes.SkyscaperControls}>  
  <strong>Levels</strong>
  {results}
  <Button disabled={!total} onClick={startOrdering}>Order</Button>
  </div>
);
};
export default SkyscaperControls;




  
// import Button from "../../UI/Button/Button";
// import SkyscaperControl from "./SkyscaperControl/SkyscaperControl";
// import classes from "./SkyscaperControls.module.css";
// import SwitchSkyscaper from "./SwitchSkyscaper/SwitchSkyscaper";
// const SkyscaperControls = ({
//   switchFilling,
//   startOrdering,
//   filling,
//   levels,
// }) => {
//   const result = [];
//   let total = 0;
//   for (const level in levels) {
//     total += levels[level];
//     result.push(
//       <SkyscaperControl
//         type={level}
//         key={level}
//         filling={filling}
//         switchFilling={switchFilling}
//         count={levels[level]}
//       />
//     );
//   }
//   return (
//     <div className={classes.SkyscaperControls}>
//       <SwitchSkyscaper switchFilling={switchFilling} />
//       {result}
//       <div className={classes.DivButton}>
//         <Button disabled={!total} onClick={startOrdering} glav="true">
//           Order
//         </Button>
//       </div>
//     </div>
//   );
// };
// export default SkyscaperControls;




  

// import Button from "../../UI/Button/Button";
// import SkyscaperControl from "./SkyscaperControl/SkyscaperControl";
// import classes from "./SkyscaperControls.module.css";
// const SkyscaperControls = ({ 
//   levels,
//    addLevel, 
//    removeLevel,
//    startOrdering
//   }) => {
//   const results = [];
//   let total = 0;
//   for (const level in levels) {
//   total+= levels[level];
//     results.push(
//       <SkyscaperControl
//         type={level}
//         addLevel={addLevel}
//         removeLevel={removeLevel}
//         key={level}
//              count={level[level]}
//       />
//     )
//   }
// return (
//   <div className={classes.SkyscaperControls}>  
//   <strong>Levels</strong>
//   {results}
//   <Button disabled={!total} onClick={startOrdering}>Order</Button>
//   </div>
// );
// };
// export default SkyscaperControls;





// import Button from "../../UI/Button/Button";
// import SkyscaperControl from "./SkyscaperControl/SkyscaperControl";
// import classes from "./SkyscaperControls.module.css";
// const SkyscaperControls = ({ 
//   levels,
//    startOrdering
//   }) => {
//   const results = [];
//   let total = 0;
//   for (const level in levels) {
//   total+= levels[level];
//     results.push( <SkyscaperControl
//         type={level}
        
//         key={level}
//              count={level[level]} /> )
//   }
// return (
//   <div className={classes.SkyscaperControls}>  
//   <strong>Levels</strong>
//   {results}
//   <Button disabled={!total} onClick={startOrdering}>Order</Button>
//   </div>
// );
// };
// export default SkyscaperControls;
