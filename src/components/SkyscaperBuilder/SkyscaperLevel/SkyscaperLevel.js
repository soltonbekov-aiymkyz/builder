//import classes from "./SkyscaperLevel.module.css";
const  SkyscaperLevel = ({type}) => {
const types ={
    restaurantfloor: {backgroundImage: `url(${restaurantfloorImage})`},
    livingfloor: 2,
    shopfloor: 1,
}


    return (
        <div>{type}</div>
    )
}

export default SkyscaperLevel;