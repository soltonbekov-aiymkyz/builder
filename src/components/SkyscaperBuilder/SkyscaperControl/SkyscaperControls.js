import classes from "./SkyscaperControls.module.css";
import SkyscaperControl from "./SkyscaperControl/SkyscaperControl";
const  SkyscaperControls = ({ levels, addLevel, removeLevel }) => {
  const results = [];
  for (const level in levels) {
    results.push(<SkyscaperControl
        key={level}
        add={addLevel}
        remove={removeLevel}
        type={Level} />)
  }
  
  
  return (
        <div className={classes.SkyscaperControl}>
      <strong>Levels</strong>
      {results}
        </div>
    )
}

export default SkyscaperControls;
