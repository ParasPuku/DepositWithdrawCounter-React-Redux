import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Home from "./Components/Home";
import { Provider } from "react-redux";
import { store } from "./ReduxState/Store/store";
console.log("STORE", store);
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <Home />
    </Provider>
  </StrictMode>,
  rootElement
);
