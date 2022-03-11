// import action types
import { INCREMENT, DECREMENT, RESET } from "./counter.types";

// action 1
export const increaseCounter = () => {
  return {
    type: INCREMENT,
    payload: "",
  }
};

// action 2
export const decreaseCounter = () => {
  return {
    type: DECREMENT,
    payload: "",
  }
};

// action 3
export const resetCounter = () => {
  return {
    type: RESET,
    payload: "",
  }
};
