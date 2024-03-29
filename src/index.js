// react
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// redux
import { Provider } from "react-redux";
import store from "./redux/store";

// virtual dom
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
