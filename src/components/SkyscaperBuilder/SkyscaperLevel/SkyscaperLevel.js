import reactDom from "react-dom";

//import classes from "./SkyscaperLevel.module.css";
const  SkyscaperLevel = ({type}) => {
const types ={
    restaurantfloor: {backgroundColor:red,width:"35px", },
    livingfloor:  {backgroundColor:blue,width:"35px", },
    shopfloor: 1,
}






    return ( 
        <div>{type}</div>
    )
}


export default SkyscaperLevel;