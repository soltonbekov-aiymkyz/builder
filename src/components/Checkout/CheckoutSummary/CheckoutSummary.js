import classes from "./CheckoutSummary.module.css";
import SkyscaperPreview from "../../SkyscaperBuilder/SkyscaperPreview/SkyscaperPreview";
import Button from "../../UI/Button/Button";

const CheckoutSummary = ({ cancelCallback }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <div>
        <SkyscaperPreview levels={{
          floor1: 5, 
          floor2: 10,
          floor3: 5,
        }} price={12000} />
      </div>
      <div>
        <Button>Checkout</Button>
        <Button onClick={cancelCallback}>Cancel</Button>
      </div>
    </div>
  );
}
 
export default CheckoutSummary;






// import classes from "./CheckoutSummary.module.css";
// import SkyscaperPreview from "../../SkyscaperBuilder/SkyscaperPreview/SkyscaperPreview";
// import Button from "../../UI/Button/Button";

// const CheckoutSummary = ({ cancelCallback }) => {
//   return (
//     <div className={classes.CheckoutSummary}>
//       <div>
//         <SkyscaperPreview pots={{
//             floor1: 5, 
//                       floor2: 10,
//                       floor3: 5,
//         }} price={150} />
//       </div>
//       <div>
//         <Button>Checkout</Button>
//         <Button onClick={cancelCallback}>Cancel</Button>
//       </div>
//     </div>
//   );
// }

// export default CheckoutSummary; 