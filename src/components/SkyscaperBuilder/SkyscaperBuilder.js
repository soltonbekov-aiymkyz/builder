import classes from "./SkyscaperBuilder.module.css";
import SkyscaperPreview from "./SkyscaperPreview/SkyscaperPreview";
import SkyscaperControls from "./SkyscaperControls/SkyscaperControls";
import  { useState } from "react";
const  SkyscaperBuilder = () => {
    const [levels, setLevels]= useStale({
        restaurantfloor: 10,
        livingfloor: 20,
        shopfloor: 10,
    });
    return (
        <div className={classes.SkyscaperBuilder}>
            <SkyscaperPreview levels = {levels}/>
            <SkyscaperControls  levels = {levels}    />
        </div>
    )
}
export default SkyscaperBuilder;
