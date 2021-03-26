
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
      const Top = Math.round(Math.random() * skyscaperDiameter);
      const Left = Math.round(Math.random() * skyscaperDiameter);
      const distance =
        Math.sqrt(
          Math.pow(Top - skyscaperRadius, 2) +
            Math.pow(Left - skyscaperRadius, 2)
        ) + levelRadius;
      return distance < skyscaperRadius
        ? {
            top: Top - levelRadius,
            left: Left - levelRadius,
          }
        : getPosition(levelWidth);
    }


    //   const position = getPosition(types[type].width);
    //   types[type].top = position.top + "px";
    //   types[type].left = position.left + "px";
    //   types[type].transform = `rotate(${Math.round(Math.random() * 360)}deg)`;



    return <div className={classes.SkyscaperLevel} style={types[type]}></div>;
  };
 export default SkyscaperLevel;

//  import classes from "./BunsIngredient.module.css";

//  const BunsIngredient = ({ type }) => {
//    const types = {
//      Bun1: { backgroundColor: `red`, width: "35px", height: "35px", display: "inline-block" },
//      Bun2: { backgroundColor: `blue`, width: "35px", height: "35px", display: "inline-block" },
//      Bun3: { backgroundColor: `green`, width: "35px", height: "35px", display: "inline-block" },
//      Bun4: { backgroundColor: `pink`, width: "35px", height: "35px", display: "inline-block" },
//      Bun5: { backgroundColor: `orange`, width: "35px", height: "35px", display: "inline-block" },
//      Bun6: { backgroundColor: `yellow`, width: "35px", height: "35px", display: "inline-block" },
//    };
 
  
 
 
//    return <div className={classes.BunsIngredient} style={types[type]}></div>;
//  };
 
//  export default BunsIngredient;