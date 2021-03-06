//   import axios from "../../axios";
//   import { SET_LEVELS} from "./types";
//   export const add = ( level) => ({
//     type: "ADD_LEVEL",
//     level:  level
//   });
//   export const remove = ( level) => ({
//     type: "REMOVE_LEVEL",
//     level: level
//   });
// export const set = (data) => ({
//   type: SET_LEVELS,
//   data: data
// });
// export const load = () => {
//   // return (dispatch) => axios.get("https://builder-6b86c-default-rtdb.firebaseio.com/default.json")
//   return (dispatch) => axios.get("/default.json")
//     .then(response => dispatch(set(response.data)))
// };

import axios from "../../axios";
import { ADD_LEVEL, REMOVE_LEVEL, SET_LEVELS } from "./types";

export const add = (level) => ({
  type: ADD_LEVEL,
  level: level
});

export const remove = (level) => ({
  type: REMOVE_LEVEL,
  level: level
});

export const set = (data) => ({
  type: SET_LEVELS,
  data: data
});

export const load = () => {
  return (dispatch) => axios
    .get('/default.json')
    .then(response => dispatch(set(response.data)));
}