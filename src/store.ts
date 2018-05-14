import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import * as promise from "redux-promise";

import reducers from "./reducers";

export function initializeStore() {
    const enhancers = [
        applyMiddleware(promise)
    ];

    const createStoreWithMiddleware = composeWithDevTools(...enhancers)(createStore);

    const store = createStoreWithMiddleware(reducers);

    return store;
}
