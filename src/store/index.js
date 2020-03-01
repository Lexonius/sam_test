import { createStore } from "redux";

const INITIAL_STATE = {
  data: [],
  filterData: []
};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, data: action.payload };
    case "SET_FILTER_DATA":
      return { ...state, filterData: action.payload };
    default:
      return state;
  }
}

const store = createStore(rootReducer);

export default store;
