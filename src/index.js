import App from "./features/recipe/App";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
