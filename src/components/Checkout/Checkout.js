
// import CheckoutSummary from "./CheckoutSummary/CheckoutSummary";
// const Checkout = ({ history }) => {
//     function cancelCallback() {
//       history.replace('/');
//     }
//     return (
//         <div>
//           <CheckoutSummary cancelCallback={cancelCallback} />
//         </div>
//       );
//     }

// export default Checkout;


// import SkyscaperPreview from "../SkyscaperBuilder/SkyscaperPreview/SkyscaperPreview";
// import CheckoutForm from "./CheckoutForm/CheckoutForm";
// const Checkout = ({ history }) => {
//   function cancelCallback() {
//     history.replace('/');
//   }
//   return (
//     <div>
//       <SkyscaperPreview levels={{
//           floor1: 5, 
//           floor2: 10,
//           floor3: 5,
//         }} price={12000} />
//       <CheckoutForm />
//     </div>
//   );
// }
// export default Checkout;

// import SkyscaperPreview from "../SkyscaperBuilder/SkyscaperPreview/SkyscaperPreview";
// import CheckoutForm from "./CheckoutForm/CheckoutForm";
// import classes from "./Checkout.module.css";
// const Checkout = ({ history }) => {
//   function cancelCallback() {
//     history.replace('/');
//   }
//   return (
//     <div className={classes.Checkout}>
//      <SkyscaperPreview levels={{
//           floor1: 5, 
//           floor2: 10,
//           floor3: 5,
//         }} price={12000} />
//       <CheckoutForm 
//       cancelCallback={cancelCallback}

//       />
//     </div>
//   );
// }
 
// export default Checkout;


// import SkyscaperPreview from "../SkyscaperBuilder/SkyscaperPreview/SkyscaperPreview";
// import CheckoutForm from "./CheckoutForm/CheckoutForm";
// import classes from "./Checkout.module.css";
// import axios from "axios";
// const Checkout = ({ history }) => {
//   function cancelCallback() {
//     history.replace('/');
//   }
//   function submitCallback(event) {
//     const data = new FormData(event.target);
//     axios.post('https://builder-6b86c-default-rtdb.firebaseio.com/orders.json', {
//       name: data.get('name'),
//       address: data.get('address'),
//       phone: data.get('phone'),
//       levels: {
//         floo1: 3,
//         floor2: 3,
//         floor3: 3,
//         floor4: 3,
//         floor5: 3,
//       },
//       price: 100,
//     }).then(response => {
//       history.replace('/');
//     });
//     event.preventDefault();
//   }
//   return (
//     <div className={classes.Checkout}>
//       <SkyscaperPreview levels={{
//         floor1: 5, 
//         floor2: 10,
//        floor3: 5,
//       }} price={150} />
//       <CheckoutForm
//         cancelCallback={cancelCallback}
//         submitCallback={submitCallback} />
//     </div>
//   );
// }
// export default Checkout;

  
import SkyscaperPreview from "../SkyscaperBuilder/SkyscaperPreview/SkyscaperPreview";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import classes from "./Checkout.module.css";
import axios from "axios";
import { useSelector } from "react-redux";
const Checkout = ({ history }) => {
  const levels = useSelector(state => state.builder.levels);
  const price = useSelector(state => state.builder.price);

  function cancelCallback() {
    history.replace('/');
  }

  function submitCallback(event) {
    const data = new FormData(event.target);

    axios.post('https://builder-6b86c-default-rtdb.firebaseio.com/orders.json', {
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
 
export default Checkout;













