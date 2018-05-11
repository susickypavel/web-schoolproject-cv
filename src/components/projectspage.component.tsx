import * as React from "react";

import { TicketModal } from "./ticket.component";
import { ticketContent } from "../content";

export default class ProjectPage extends React.Component {

    renderTickets() {
        return(
            ticketContent.map((ticket) => {
                return <TicketModal name={ticket.name} content={ticket.content} key={ticket.name}/>;
            })
        );
    }

    render() {
        return(
            <div>
                Project page
                {this.renderTickets()}
            </div>
        );
    }
}
