import axios from "axios";
import { useEffect, useState } from "react";
import Order from "./Order/Order";
import classes from "./Orders.module.css";
const Orders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios.get('https://builder-6b86c-default-rtdb.firebaseio.com/orders.json')
      .then(response => {
        const newOrders = Object.keys(response.data).map(id => {
          return {
            ...response.data[id],
            id: id,
          };
        });
        setOrders(newOrders);
      });
  }, []);
  const results = orders.map(order => <Order key={order.id} {...order} />);
  return (
    <div className={classes.Orders}>
      {results}
    </div>
  );
}
export default Orders;



