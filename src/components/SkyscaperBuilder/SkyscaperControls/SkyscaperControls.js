
import SkyscaperControl from "./SkyscaperControl/SkyscaperControl";
import classes from "./SkyscaperControls.module.css";
const SkyscaperControls = ({ levels, addLevel, removeLevel }) => {
  const results = [];
  
  let total = 0;

  for (const level in levels) {
 
  total+= levels[level];

    results.push(
      <SkyscaperControl
        type={level}
        addLevel={addLevel}
        removeLevel={removeLevel}
      />
    )
  }

return (
  <div className={classes.SkyscaperControls}>  
  <strong>Levels</strong>
  {results}
  <button disabled={!total}>Order</button>
  </div>
);
};
export default SkyscaperControls;


// import Button from "../../UI/Button/Button";
// import PizzaControl from "./PizzaControl/PizzaControl";
// import classes from "./PizzaControls.module.css";

// const PizzaControls = ({ ingredients, addIngredient, removeIngredient }) => {
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
//         type={ingredient} />)
//   }

//   return (
//     <div className={classes.PizzaControls}>
//       <strong>Ingredients</strong>
//       {results}
//       <Button disabled={!total}>Order</Button>
//     </div>
//   );
// }

// export default PizzaControls;
