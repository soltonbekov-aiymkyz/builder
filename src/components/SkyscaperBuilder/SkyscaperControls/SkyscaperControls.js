
import Button from "../../UI/Button/Button";
import SkyscaperControl from "./SkyscaperControl/SkyscaperControl";
import classes from "./SkyscaperControls.module.css";
const SkyscaperControls = ({ 
  levels,
   addLevel, 
   removeLevel,
   startOrdering
  }) => {
  const results = [];
  let total = 0;
  for (const level in levels) {
  total+= levels[level];
    results.push(
      <SkyscaperControl
        type={level}
        addLevel={addLevel}
        removeLevel={removeLevel}
        key={level}
             count={level[level]}
      />
    )
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
// const SkyscaperControls = ({  levels,  addLevel,   removeLevel,  startOrdering }) => {
//   const results = [];
//   const levels = [
//     "floor1",
//     "floor2",
//     "floor3",
//     "floor4",
//     "floor5",
//   ];
//   for (const level in levels) {
//     result.push(
//       <SkyscaperControl
//         key={levels[level]}
//         type={levels[level]}
//         addLevel={addLevel}
//         removeLevel={removeLevel}
//       />
//     );
//   }
// return 
//   <div className={classes.SkyscaperControls}>  
  
//   {result}
//   <Button disabled={!levels.length} onClick={startOrdering} aqua>Order</Button>
//   </div>
// };
// export default SkyscaperControls;





