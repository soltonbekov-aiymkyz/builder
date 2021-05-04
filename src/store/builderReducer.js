const initialState = {
    levels: {
        floor1: 5,
        floor2: 5,
        floor3 : 5,
        floor4: 5,
        floor5: 5,
      },
      price: 200,
};
  const prices = {
    floor1: 50000,
    floor2: 4000,
    floor3 : 12000,
    floor4: 23000,
    floor5: 13000,
  };
  const builderReducer = (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
      case "ADD_LEVEL":
        newState.levels[action.level]++;
        newState.price += prices[action.level];
        break;
      case "REMOVE_LEVEL":
        newState.levels[action.level]--;
        newState.price -= prices[action.level];
        break;
      default:
        break;
    }
    return newState;
  }
  export default builderReducer;