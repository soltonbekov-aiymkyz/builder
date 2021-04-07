
import SkyscaperControl from "./SkyscaperControl/SkyscaperControl";
import classes from "./SkyscaperControls.module.css";
const SkyscaperControls = ({ levels, addLevel, removeLevel }) => {
  const results = [];
  
  let total = 0;

  for (const level in levels) {
 
  total+= levels[level];

    results.push(
      <SkyscaperControl
        type={level}
        addLevel={addLevel}
        removeLevel={removeLevel}
      />
    )
  }


//   return (
//     <div className={classes.SkyscaperControls}>  {results}</div>
//   );
// };


return (
  <div className={classes.SkyscaperControls}>  
  <strong>Levels</strong>
  {results}
  <button disabled={!total}>Order</button>
  </div>
);
};
export default SkyscaperControls;


