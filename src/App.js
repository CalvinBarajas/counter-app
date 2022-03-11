// import
import React from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css"; // react-bootstrap

// redux
import { useSelector, useDispatch } from "react-redux";
import {
  increaseCounter,
  decreaseCounter,
  resetCounter,
} from "./redux/Counter/counter.actions";

// create component
const App = () => {
  let count = useSelector((state) => state.maCounter.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increaseCounter());
  };

  const handleDecrement = () => {
    dispatch(decreaseCounter());
  };

  const handleReset = () => {
    dispatch(resetCounter());
  };

  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-md-auto m-5">
          <header>
            Current Count: <span>{count}</span>
          </header>
          <div className="row justify-content-md-center">
            <div className="col-md-auto m-5">
              <Button
                size="lg"
                variant="primary"
                className="button m-3"
                onClick={() => handleIncrement()}
              >
                INCREMENT
              </Button>
              <Button
                size="lg"
                variant="success"
                className="button m-3"
                onClick={() => handleDecrement()}
              >
                DECREMENT
              </Button>
              <Button
                size="lg"
                variant="warning"
                className="button m-3"
                onClick={() => handleReset()}
              >
                RESET
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// export
export default App;
