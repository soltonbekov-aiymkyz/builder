
import classes from "./SkyscaperLevel.module.css";
const SkyscaperLevel = ({ type }) => {
    const types = {
      floor1: { backgroundColor: `red`, width: "35px", height: "35px", display: "inline-block"},
      floor2: { backgroundColor: `blue`, width: "35px", height: "35px",display: "inline-block" },
      floor3: { backgroundColor: `green`, width: "35px", height: "35px",display: "inline-block" },
      floor4: { backgroundColor: `yellow`, width: "35px", height: "35px",display: "inline-block"},
      floor5: { backgroundColor: `pink`, width: "35px", height: "35px", display: "inline-block"},
      floor6: { backgroundColor: `orange`, width: "35px", height: "35px",display: "inline-block" },
    }
    return <div className={classes.SkyscaperLevel} style={types[type]}></div>;
  };
 export default SkyscaperLevel;
