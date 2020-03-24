import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import './index.scss';
import {Provider} from "react-redux";
import rootStore from "./store/rootStore";

ReactDOM.render(
    <Provider store={rootStore}>
        <App />
    </Provider>,
    document.getElementById("root"));
