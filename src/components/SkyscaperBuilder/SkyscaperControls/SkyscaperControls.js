
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



