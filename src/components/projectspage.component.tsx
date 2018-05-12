import * as React from "react";
import { connect } from "react-redux";

import { TicketModal } from "./ticket.component";

interface IProps {
    tickets: object[];
}

class ProjectPage extends React.Component<IProps> {

    renderTickets() {
        return(
            this.props.tickets.map((ticket: any) => {
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

function mapStateToProps(state: any) {
    return {
        tickets: state.ticketList
    };
}

export default connect(mapStateToProps)(ProjectPage);
