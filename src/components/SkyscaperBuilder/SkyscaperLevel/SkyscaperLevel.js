import reactDom from "react-dom";

//import classes from "./SkyscaperLevel.module.css";
const  SkyscaperLevel = ({type}) => {
const types ={
    restaurantfloor: {backgroundColor:red,width:"35px",height:"35px" },
    livingfloor:  {backgroundColor:blue,width:"35px",height:"35px" },
    shopfloor:   {backgroundColor:violet,width:"35px", height:"35px"},
}






    return ( 
        <div>{type}</div>
    )
}


export default SkyscaperLevel;