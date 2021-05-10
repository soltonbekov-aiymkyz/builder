import classes from "./SkyscaperBuilder.module.css";
import SkyscaperPreview from "./SkyscaperPreview/SkyscaperPreview";
import SkyscaperControls from "./SkyscaperControls/SkyscaperControls";
import axios from "axios"
import Modal from "../UI/Modal/Modal";
import { useEffect, useState } from "react"
import OrderSummary from "./OrderSummary/OrderSummary";
import Button from "../UI/Button/Button"
import { useDispatch, useSelector } from "react-redux";
import { load } from "../../store/actions/builder";

import withAxios from "../withAxios";


const SkyscaperBuilder = ({history}) => {
 const dispatch = useDispatch();
const levels = useSelector(state => state.builder.levels);
 const price = useSelector(state => state.builder.price);
  const [ordering, setOrdering] = useState(false);


  
  useEffect(() => dispatch(load()), []);
  // useEffect(loadDefaults, []);
  // function loadDefaults() {
  //   axios
  //     .get('https://builder-6b86c-default-rtdb.firebaseio.com/default.json')
  //     .then(response => {
  //       setPrice(response.data.price);
  //       setLevels(response.data.levels);
  //     });
  // }

  function startOrdering() {
    setOrdering(true);
  }
  function stopOrdering() {
    setOrdering(false);
  }
 
  
  function finishOrdering() {
    setOrdering(false);
    // loadDefaults();
    history.push('/checkout');
  }
//)  
  return (
    <div className={classes.SkyscaperBuilder}>
      <SkyscaperPreview
       levels={levels}
        price={price} />
      <SkyscaperControls
        levels={levels}
        startOrdering={startOrdering}
      />
      <Modal
        show={ordering}
        cancel={stopOrdering}>
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

export default withAxios(SkyscaperBuilder, axios);






