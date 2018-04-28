import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "./reducers";

export function initializeStore() {
    const enhancers = [
        applyMiddleware()
    ];

    const createStoreWithMiddleware = composeWithDevTools(...enhancers)(createStore);

    const store = createStoreWithMiddleware(reducers);

    return store;
}
