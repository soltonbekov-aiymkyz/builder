
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
        // key={ingredient}
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

// import Button from "../../UI/Button/Button";
// import PizzaControl from "./PizzaControl/PizzaControl";
// import classes from "./PizzaControls.module.css";

// const PizzaControls = ({
//   ingredients,
//   addIngredient,
//   removeIngredient,
//   startOrdering
// }) => {
//   const results = [];
//   let total = 0;
//   for (const ingredient in ingredients) {

//     // Add ingredient number to totals number
//     total += ingredients[ingredient];
//     // Render pizza control for this ingredient
//     results.push(<PizzaControl
//         key={ingredient}
//         add={addIngredient}
//         remove={removeIngredient}
//         count={ingredients[ingredient]}
//         type={ingredient} />)
//   }

//   return (
//     <div className={classes.PizzaControls}>
//       <strong>Ingredients</strong>
//       {results}
//       <Button disabled={!total} onClick={startOrdering}>Order</Button>
//     </div>
//   );
// }

// export default PizzaControls;