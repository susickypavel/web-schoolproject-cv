import { SET_ACTIVE_TICKET, UNSET_ACTIVE_TICKET } from "./types";

import { ITicket } from "../containers/ticket.container";

export function SetActiveTicket(ticket: ITicket) {
    return {
        type: SET_ACTIVE_TICKET,
        payload: ticket
    };
}

export function UnsetActiveTicket() {
    return {
        type: UNSET_ACTIVE_TICKET
    };
}
