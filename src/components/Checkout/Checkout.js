 import SkyscaperPreview from "../SkyscaperBuilder/SkyscaperPreview/SkyscaperPreview";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import classes from "./Checkout.module.css";
import axios from "axios";
import withAxios from "../withAxios";
import { useSelector } from "react-redux";


const Checkout = ({ history }) => {
  const levels = useSelector(state => state.builder.levels);
  const price = useSelector(state => state.builder.price);
  function cancelCallback() {
    history.replace('/');
  }
  function submitCallback(event) {
    const data = new FormData(event.target);
    axios.post('/orders.json', {
      name: data.get('name'),
      address: data.get('address'),
      phone: data.get('phone'),
      levels: levels,
      price: price,
    }).then(response => {
      history.replace('/');
    });

    event.preventDefault();
  }
  return (
    <div className={classes.Checkout}>
      <SkyscaperPreview levels={levels} price={price} />
      <CheckoutForm
        cancelCallback={cancelCallback}
        submitCallback={submitCallback} />
    </div>
  );
}
export default withAxios(Checkout, axios) ;



