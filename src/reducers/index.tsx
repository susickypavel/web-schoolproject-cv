import { combineReducers } from "redux";

export interface IState {
    // authenticated: boolean;
}

const rootReducer = combineReducers({
    state: (state = {}) => state
});

export default rootReducer;
