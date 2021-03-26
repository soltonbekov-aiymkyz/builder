
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
      const levelRadius = parseInt(leveltWidth) / 2;
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
      const position = getPosition(types[type].width);
      types[type].top = position.top + "px";
      types[type].left = position.left + "px";
      types[type].transform = `rotate(${Math.round(Math.random() * 360)}deg)`;
    return <div className={classes.SkyscaperLevel} style={types[type]}></div>;
  };
 export default SkyscaperLevel;


 
//  const SkyscaperLevel = ({ type }) => {
//     const types = {
//       salami: { backgroundImage: `url(${salamiBackground})`, width: "35px", height: "35px" },
//       tomato: { backgroundImage: `url(${tomatoBackground})`, width: "35px", height: "35px" },
//       blackOlive: { backgroundImage: `url(${blackOliveBackground})`, width: "10px", height: "10px" },
//       greenOlive: { backgroundImage: `url(${greenOliveBackground})`, width: "10px", height: "10px" },
//       redPepper: { backgroundImage: `url(${redPepperBackground})`, width: "20px", height: "20px" },
//       yellowPepper: { backgroundImage: `url(${yellowPepperBackground})`, width: "40px", height: "40px" },
//     };
//     function getPosition(ingredientWidth) {
//       const pizzaDiameter = 380;
//       const pizzaRadius = pizzaDiameter / 2;
//       const ingredientRadius = parseInt(ingredientWidth) / 2;
//       const ingredientTop = Math.round(Math.random() * pizzaDiameter);
//       const ingredientLeft = Math.round(Math.random() * pizzaDiameter);
//       const distance = Math.sqrt(
//         Math.pow(ingredientTop - pizzaRadius, 2) + Math.pow(ingredientLeft - pizzaRadius, 2)
//       ) + ingredientRadius;
//       return distance < pizzaRadius
//         ? {
//           top: ingredientTop - ingredientRadius,
//           left: ingredientLeft - ingredientRadius
//         }
//         : getPosition(ingredientWidth);
//     }
//     const position = getPosition(types[type].width);
//     types[type].top = position.top + "px";
//     types[type].left = position.left + "px";
//     types[type].transform = `rotate(${Math.round(Math.random() * 360)}deg)`;
//     return (
//       <div className={classes.AquariumFish} style={types[type]}></div>
//     );
//   }
  