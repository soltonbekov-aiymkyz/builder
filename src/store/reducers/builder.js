import { ADD_LEVEL, REMOVE_LEVEL, SET_LEVELS} from "../actions/types";

const initialState = {
    levels: {
  },
  price: 0,
};
const prices = {
    floor1: 50000,
    floor2: 4000,
    floor3 : 12000,
    floor4: 23000,
    floor5: 13000,
  };

  
const builder = (state = initialState, action) => {
    const newState = { ...state };
  
    switch (action.type) {
      case ADD_LEVEL:
        newState.levels[action.level]++;
        newState.price += prices[action.level];
        break;
      case REMOVE_LEVEL:
        newState.levels[action.level]--;
        newState.price -= prices[action.level];
        break;
      case SET_LEVELS:
        newState.levels = action.data.levels;
        newState.price = action.data.price;
        break;
    
      default:
        break;
    }
  
    return newState;
  }
  
  export default builder;



