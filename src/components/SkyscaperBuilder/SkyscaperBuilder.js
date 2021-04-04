import React from "react";
import classes from "./SkyscaperBuilder.module.css";
import SkyscaperPreview from "./SkyscaperPreview/SkyscaperPreview";
import SkyscaperControls from "./SkyscaperControls/SkyscaperControls";
import {useState} from "react"

const  SkyscaperBuilder = () => {
    const [levels, setLevels]= useState({
        floor1: 0,
        floor2: 0,
        floor3: 0,
        floor4: 0,
        floor5: 0,
        floor5: 0,
    });
    function addLevel(type){
        const newlevels={...levels};
        newlevels[type]++;
        setLevels(newlevels);
    }
    function removeLevel(type){
        if (levels[type]) {
            const newLevels = { ...levels };
          newLevels[type]--;
          setLevels(newLevels);
          }
    }

    return (
        <div className={classes.SkyscaperBuilder}>
            <SkyscaperPreview levels = {levels}/>
            <SkyscaperControls 
             levels = {levels}    
            addLevel={addLevel}
            removeLevel={removeLevel}
            />
        </div>
    )
};
export default React.memo(SkyscaperBuilder);

