import { combineReducers } from "redux";

import ticketReducer from "./ticketlist.reducer";

export interface IState {

}

const rootReducer = combineReducers({
    ticketList: ticketReducer
});

export default rootReducer;
