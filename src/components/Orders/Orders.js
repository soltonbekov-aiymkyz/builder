
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { load } from "../../store/actions/orders";
import Order from "./Order/Order";
import classes from "./Orders.module.css";
import withAxios from "../withAxios";
const Orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector(state => state.orders);
  useEffect(() => {
    dispatch(load());
  }, []);
  const results = orders.map(order => <Order key={order.id} {...order} />);
  return (
    <div className={classes.Orders}>
      {results}
    </div>
  );
}
export default withAxios(Orders, axios);