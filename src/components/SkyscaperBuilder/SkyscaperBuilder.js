import classes from "./SkyscaperBuilder.module.css";
import SkyscaperPreview from "./SkyscaperPreview/SkyscaperPreview";
import SkyscaperControls from "./SkyscaperControls/SkyscaperControls";
import axios from "axios"
import Modal from "../UI/Modal/Modal";
import { useEffect, useState } from "react"
import OrderSummary from "./OrderSummary/OrderSummary";
import Button from "../UI/Button/Button"
import { useSelector } from "react-redux";

const SkyscaperBuilder = ({history}) => {
const levels = useSelector(state => state.levels);
 const price = useSelector(state => state.price);
  const [ordering, setOrdering] = useState(false);
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
    axios
      .post('https://builder-6b86c-default-rtdb.firebaseio.com/orders.json', {
        levels: levels,
        price: price,
        address: "oktyabrskaya",
        phone: "0 777 777 777",
        name: "Sadyr Japarov",
      })
      .then(() => {
        setOrdering(false);
        // loadDefaults();
        history.push('/checkout');
      });
  }
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



