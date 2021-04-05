import React from "react";
import classes from "./SkyscaperBuilder.module.css";
import SkyscaperPreview from "./SkyscaperPreview/SkyscaperPreview";
import SkyscaperControls from "./SkyscaperControls/SkyscaperControls";
import axios from "axios"
import { useEffect, useState} from "react"
const  SkyscaperBuilder = () => {
    const prices ={ 
   floor1: 120000,
   floor2:50000,
   floor3:300,
   floor4:41234,
   floor5:5234,
    }
    const [levels, setLevels]= useState({
    });
    const [price, setPrice] = useState(150);
        useEffect (function () {
            axios.get('https://builder-6b86c-default-rtdb.firebaseio.com/level.json')
                .then(response=>{
                setLevels({...response.data});
              });
          }, []);
    function addLevel(type){
        const newlevels={...levels};
        newlevels[type]++;
        setPrice(price + prices[type]);
        setLevels(newlevels);
    }
    function removeLevel(type){
        if (levels[type]) {
            const newLevels = { ...levels };
          newLevels[type]--;
          setLevels(newLevels);
          setPrice(price - prices[type])
          }
    }
    return (
        <div className={classes.SkyscaperBuilder}>
            {/* <SkyscaperPreview levels = {levels}/> */}
            <SkyscaperPreview price={price} levels={levels} />
            <SkyscaperControls 
             levels = {levels}    
            addLevel={addLevel}
            removeLevel={removeLevel}
            />

        </div>
    )
};
export default SkyscaperBuilder;

