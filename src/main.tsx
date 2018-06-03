import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { initializeStore } from "./store";

import Index from "./components/index.component";

/* Styles */
import "./style/mainStyles.less";

ReactDOM.render(
    <Provider store={initializeStore()}>
        <Index />
    </Provider>, document.getElementById("MOUNT")
);
