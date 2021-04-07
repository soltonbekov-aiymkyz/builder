import React from "react";
import classes from "./SkyscaperBuilder.module.css";
import SkyscaperPreview from "./SkyscaperPreview/SkyscaperPreview";
import SkyscaperControls from "./SkyscaperControls/SkyscaperControls";
import axios from "axios"
import { useEffect, useState} from "react"
const  SkyscaperBuilder = () => {
    const prices ={ 
   floor1: 0,
   floor2:10000,
   floor3:30000,
   floor4:11234,
   floor5:15234,
    }
    const [levels, setLevels]= useState({
    });
    const [price, setPrice] = useState(150);



        useEffect (function () {
            axios.get('https://builder-6b86c-default-rtdb.firebaseio.com/level.json')
                .then(response=>{
                setLevels({...response.data});
                setPrice({...response.data});
              });
          }, []);



        //   useEffect (function () {
        //     axios.get('https://builder-6b86c-default-rtdb.firebaseio.com//level.json')
        //         .then(response=>{
        //         setLevels({...response.data});
        //       });
        //   }, []);








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









