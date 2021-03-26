import SkyscaperControl from "./BunsControl/BunsControl";
import classes from "./SkyscaperControls.module.css";
const SkyscaperControls = ({ levels }) => {
    const result = [];
    for (const level in levels) {
        result.push(<SkyscaperControl />);
    }
    return ( 
        <div className = {classes.SkyscaperControls}>{result}</div>
    );
}
 
export default SkyscaperControls;
