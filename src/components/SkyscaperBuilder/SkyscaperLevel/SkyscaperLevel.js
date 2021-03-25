import reactDom from "react-dom";

//import classes from "./SkyscaperLevel.module.css";
const  SkyscaperLevel = ({type}) => {
const types ={
    restaurantfloor: {backgroundColor:red,width:"35px",height:"35px" },
    livingfloor:  {backgroundColor:blue,width:"35px",height:"35px" },
    shopfloor:   {backgroundColor:violet,width:"35px", height:"35px"},
}

function getPosition(levelWidth){
        const pizzaDiameter = 380;
        const pizzaRadius = pizzaDiameter / 2;
        const ingredientRadius = parseInt(ingredientWidth) / 2;
    
        const ingredientTop = Math.round(Math.random() * pizzaDiameter);
        const ingredientLeft = Math.round(Math.random() * pizzaDiameter);
    
        const distance = Math.sqrt(
          Math.pow(ingredientTop - pizzaRadius, 2) + Math.pow(ingredientLeft - pizzaRadius, 2)
        ) + ingredientRadius;
    
        return distance < pizzaRadius
          ? {
            top: ingredientTop - ingredientRadius,
            left: ingredientLeft - ingredientRadius
          }
          : getPosition(ingredientWidth);
      }




    return ( 
        <div>{type}</div>
    )
}


export default SkyscaperLevel;