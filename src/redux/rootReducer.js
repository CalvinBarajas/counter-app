// combine reducers
import { combineReducers } from "redux";

// import counterReducer
import counterReducer from "./Counter/counter.reducer";

// combine
const rootReducer = combineReducers({
  maCounter: counterReducer,
});

// export reducer
export default rootReducer;
