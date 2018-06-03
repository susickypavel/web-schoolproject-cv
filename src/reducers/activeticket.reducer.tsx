import { SET_ACTIVE_TICKET, UNSET_ACTIVE_TICKET } from "../actions/types";

export default function(state: object = {}, action: any) {
    switch (action.type) {
        case SET_ACTIVE_TICKET:
            return { payload: action.payload, activated: true };
        case UNSET_ACTIVE_TICKET:
            return { activated: false };
        default:
            return state;
    }
}
