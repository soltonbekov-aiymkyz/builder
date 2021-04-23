// import classes from "./OrderSummary.module.css";
// const OrderSummary = ({ levels, price }) => {
//   const labels = {
//     floor1: "Guest house",
//    floor2:"library",
//    floor3:"shopping",
//    floor4:"flower shop",
//    floor5:"plant house",
//   }
//   const results = Object.keys(levels)
//     .map(type => <li>{labels[type]}: {levels[type]}</li>);
//   return (
//     <div className={classes.OrderSummary}>
//       <h3>Order summary</h3>
//       <ul>
//         {results}
//       </ul>
//       <strong>Total price: {price.toFixed(1)} som</strong>
//     </div>
//   );
// }
// export default OrderSummary;



import classes from "./OrderSummary.module.css";

const OrderSummary = ({levels, price}) => {
    const labels = {
      floor1: "Guest house",
         floor2:"library",
         floor3:"shopping",
         floor4:"flower shop",
         floor5:"plant house",
    }
    const results =Object.keys(levels)
     .map(type => <li>{labels[type]} : {levels[type]}</li>)
    return ( 
        <div className={classes.OrderSummary}>
            <h3>Order Summary:</h3>
            <ul>
                {results}
            </ul>
            <strong>Total price: {price.toFixed(1)} som</strong>
        </div>   
     );
}
 
export default OrderSummary;