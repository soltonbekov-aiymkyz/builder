import React from "react";
import classes from "./SkyscaperBuilder.module.css";
import SkyscaperPreview from "./SkyscaperPreview/SkyscaperPreview";
import SkyscaperControls from "./SkyscaperControls/SkyscaperControls";
import axios from "axios"
import Modal from "../UI/Modal/Modal";
import { useEffect, useState} from "react"
import OrderSummary from "./OrderSummary/OrderSummary";
import Button from "../UI/Button/Button"


const  SkyscaperBuilder = () => {
    const prices ={ 
   floor1: 12000,
   floor2:1234567,
   floor3:12345,
   floor4:34567,
   floor5:34567,
    }
    const [levels, setLevels]= useState({ });
    const [price, setPrice] = useState(150);
    const [ordering, setOrdering] = useState(false);
        useEffect ( 
            () => axios
            .get('https://builder-6b86c-default-rtdb.firebaseio.com/default.json')
                .then(response=>{
                setLevels(response.data.levels);
                setPrice(response.data.price);
              }),[]
          );
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

  function startOrdering() {
    setOrdering(true);
  }
  function stopOrdering() {
    setOrdering(false);
  }

  function finishOrdering() {
    setOrdering(false);
  }
  return (
        <div className={classes.SkyscaperBuilder}>  
            <SkyscaperPreview  levels={levels}
             price={price} />
            <SkyscaperControls 
             levels = {levels}    
            addLevel={addLevel}
            removeLevel={removeLevel}
            startOrdering={startOrdering}
            />        
      <Modal
        show={ordering}
        cancel={stopOrdering}>Hello
        <OrderSummary
            levels={levels}
            price={price}
            />
               <Button onClick={finishOrdering} green>Checkout</Button>
            <Button onClick={stopOrdering}>Cancel</Button>

        </Modal>


        </div>
    )
};
export default SkyscaperBuilder;





