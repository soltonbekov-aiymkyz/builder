import classes from "./SkyscaperBuilder.module.css";
import classes from "./Skyscape/SkyscaperLevel.js";
const  SkyscaperPreview = () => {
    const levels = {
        restaurantfloor: 1,
        livingfloor: 2,
        shopfloor: 1,
    };
    return (
        <div className={classes.SkyscaperPreview}>
            <SkyscaperPreview levels = {levels}/>
            <SkyscaperControls />
    
        </div>
    )
}

export default SkyscaperBuilder;