
import classes from "./SkyscaperLevel.module.css";
const SkyscaperLevel = ({ type }) => {
    const types = {
      Restaurantfloor: { backgroundColor: `red`, width: "35px", height: "35px" },
      Livingfloor: { backgroundColor: `blue`, width: "35px", height: "35px" },
      Shopfloor: { backgroundColor: `green`, width: "35px", height: "35px" },
    };
  
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
  
    // Get random position for this ingredient.
      const position = getPosition(types[type].width);
      types[type].top = position.top + "px";
      types[type].left = position.left + "px";
    // Get random rotation for this ingredient.
      types[type].transform = `rotate(${Math.round(Math.random() * 360)}deg)`;
  
    return <div className={classes.SkyscaperLevel} style={types[type]}></div>;
  };
  






// const  SkyscaperLevel = ({type}) => {
// const types ={
//     restaurantfloor: {backgroundColor:red,width:"35px",height:"35px" },
//     livingfloor:  {backgroundColor:blue,width:"35px",height:"35px" },
//     shopfloor:   {backgroundColor:violet,width:"35px", height:"35px"},
// }
// function getPosition(levelWidth){
//         const skyscaperDiameter = 380;
//         const skyscaperRadius = skyscaperDiameter / 2;
//         const levelRadius = parseInt(levelWidth) / 2;
//         const levelTop = Math.round(Math.random() *skycaperDiameter);
//         const levelLeft = Math.round(Math.random() * skyscaperDiameter);
//         const distance = Math.sqrt(
//           Math.pow(levelTop - skyscaperRadius, 2) + Math.pow(levelLeft - levelRadius, 2)
//         ) + levelRadius;
//         return distance < skyscaperRadius
//           ? {
//             top: levelTop - levelRadius,
//             left: levelLeft - levelRadius
//           }
//           : getPosition(levelWidth);
//       }
//       if (!fixed) {
//         const position = getPosition(types[type].width);
//         types[type].top = position.top + "px";
//         types[type].left = position.left + "px";
//       }
//       // Get random rotation for this ingredient.
//       types[type].transform = `rotate(${Math.round(Math.random() * 360)}deg)`; 
//       return (
//         <div className={classes.SkyscaperLevel} style={types[type]}></div>
//       );
// }
 export default SkyscaperLevel;
