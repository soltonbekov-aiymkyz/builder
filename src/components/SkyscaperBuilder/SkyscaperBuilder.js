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
    function addLevel(type){
        const newlevels={...levels};
        newlevels[type]++;
        setLevels(newlevels);
    }
    function removeLevel(type){
        const newlevels={...levels};
        newlevels[type]--;
        setLevels(newlevels);
    }
    return (
        <div className={classes.SkyscaperBuilder}>
            <SkyscaperPreview levels = {levels}/>
            <SkyscaperControls  levels = {levels}    
            addLevel={addLevel}
            removeLevel={removeLevel}/>
        </div>
    )
}
export default SkyscaperBuilder;

