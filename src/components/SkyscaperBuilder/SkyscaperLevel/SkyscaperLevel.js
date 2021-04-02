
import classes from "./SkyscaperLevel.module.css";
//import flowershopp01 from "../../../images/flowershopp01.png";
const SkyscaperLevel = ({ type }) => {
    const types = {
    //  floor1: { backgroundColor: `url(${flowershopp01})`, width: "50px", height: "50px", },
    
     floor1: { backgroundColor: `red`, width: "50px", height: "50px",display: "inline-block" },
      floor2: { backgroundColor: `blue`, width: "50px", height: "50px",display: "inline-block" },
      floor3: { backgroundColor: `green`, width: "50px", height: "50px",display: "inline-block" },
      floor4: { backgroundColor: `yellow`, width: "50px", height: "50px",display: "inline-block"},
      floor5: { backgroundColor: `pink`, width: "50px", height: "50px", display: "inline-block"},
      floor6: { backgroundColor: `orange`, width: "50px", height: "50px",display: "inline-block" },
    }
    return <div className={classes.SkyscaperLevel} style={types[type]}></div>;
  };
 export default SkyscaperLevel;
