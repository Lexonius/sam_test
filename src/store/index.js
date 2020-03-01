import { createStore } from "redux";

const INITIAL_STATE = {
  data: []
};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, data: action.payload };
    default:
      return state;
  }
}

const store = createStore(rootReducer);

export default store;
