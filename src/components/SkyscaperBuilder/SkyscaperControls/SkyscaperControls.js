import classes from "./SkyscaperControls.module.css";
import SkyscaperControls from "./SkyscaperControls/SkyscaperControls";
const  SkyscaperControls = ({ levels, addLevel, removeLevel }) => {
  const results = [];
  for (const level in levels) {
    results.push(<SkyscaperControls
        key={level}
        add={addLevel}
        remove={removeLevel}
        type={Level} />)
  }
  
  





  return (
        <div className={classes.SkyscaperControls}>
      <strong>Levels</strong>
      {results}
        </div>
    )
}

export default SkyscaperControls;
