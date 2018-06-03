import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import ticketReducer from "./ticketlist.reducer";
import ticketReducerActive from "./activeticket.reducer";

import { ITicket } from "../containers/ticket.container";

export interface IRState {
    activeTicket: ITicket;
    ticketList: object[];
    form: any;
}

const rootReducer = combineReducers({
    ticketList: ticketReducer,
    activeTicket: ticketReducerActive,
    form: formReducer
});

export default rootReducer;
