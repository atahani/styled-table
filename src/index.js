import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";
import "./style/global";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
