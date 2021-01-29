import React from "react";
import { render } from "react-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import App from "./components/App";

import oscReducer from "./features/oscillator/oscSlice";

const store = configureStore({
  reducer: oscReducer,
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
