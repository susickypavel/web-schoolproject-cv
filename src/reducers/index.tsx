import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import ticketReducer from "./ticketlist.reducer";

export interface IState {

}

const rootReducer = combineReducers({
    ticketList: ticketReducer,
    form: formReducer
});

export default rootReducer;
