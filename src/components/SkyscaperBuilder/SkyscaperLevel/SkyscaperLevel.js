
import classes from "./SkyscaperLevel.module.css";
const SkyscaperLevel = ({ type }) => {
    const types = {
      Restaurantfloor: { backgroundColor: `red`, width: "35px", height: "35px" },
      Livingfloor: { backgroundColor: `blue`, width: "35px", height: "35px" },
      Shopfloor: { backgroundColor: `green`, width: "35px", height: "35px" },
    }
    function getPosition(levelWidth) {
      const skyscaperDiameter = 380;
      const skyscaperRadius = skyscaperDiameter / 2;
      const levelRadius = parseInt(levelWidth) / 2;
      const levelTop = Math.round(Math.random() * skyscaperDiameter);
      const levelLeft = Math.round(Math.random() * skyscaperDiameter);
      const distance = Math.sqrt(
          Math.pow(levelTop - skyscaperRadius, 2) +
            Math.pow(levelLeft - skyscaperRadius, 2)
        ) + levelRadius;
      return distance < skyscaperRadius
        ? {
            top: levelTop - levelRadius,
            left: levelLeft - levelRadius,
          }
        : getPosition(levelWidth);
    }
      const position = getPosition(types[type].width);
      types[type].top = position.top + "px";
      types[type].left = position.left + "px";
      types[type].transform = `rotate(${Math.round(Math.random() * 360)}deg)`;
    return <div className={classes.SkyscaperLevel} style={types[type]}></div>;
  };
 export default SkyscaperLevel;
 
  