import { SET_ORDERS } from "../actions/types";

const initialState = [];

const orders = (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDERS:
      return Object.keys(action.data).map(id => {
        return {
          ...action.data[id],
          id: id,
        };
      });;
  
    default:
      break;
  }

  return state;
}

export default orders;