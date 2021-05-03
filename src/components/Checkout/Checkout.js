
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


import SkyscaperPreview from "../SkyscaperBuilder/SkyscaperPreview/SkyscaperPreview";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import classes from "./Checkout.module.css";
import axios from "axios";
const Checkout = ({ history }) => {
  function cancelCallback() {
    history.replace('/');
  }
  function submitCallback(event) {
    const data = new FormData(event.target);
    axios.post('https://builder-6b86c-default-rtdb.firebaseio.com/orders.json', {
      name: data.get('name'),
      address: data.get('address'),
      phone: data.get('phone'),
      levels: {
        floo1: 10,
        floor2: 10,
        floor3: 10,
        floor4: 10,
        floor5: 10,
      },
      price: 100,
    }).then(response => {
      history.replace('/');
    });
    event.preventDefault();
  }
  return (
    <div className={classes.Checkout}>
      <SkyscaperPreview levels={{
        floor1: 5, 
        floor2: 10,
       floor3: 50,
      }} price={150} />
      <CheckoutForm
        cancelCallback={cancelCallback}
        submitCallback={submitCallback} />
    </div>
  );
}
export default Checkout;