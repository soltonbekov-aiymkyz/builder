import axios from "../../axios";
import { SET_ORDERS } from "./types";

export const set = (data) => ({
  type: SET_ORDERS,
  data: data
});

export const load = (token, id) => {
  return (dispatch) => axios
    .get('/orders.json?auth=' + token + '&orderBy="userId"&equalTo="' + id + '"')
    .then(response => dispatch(set(response.data)));
}