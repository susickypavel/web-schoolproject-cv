import * as React from "react";
import { Link } from "react-router-dom";

import { ticketContent } from "../content";

// TODO
// For mobiles is "read more" not quite user experience friendly
// Try to make another version for mobiles (maybe?)
// MAYBE -> To let be read more visible whole time.


// TODO
// Make a component connected to redux store and get content for each
// Ticket from redux state.

export default class Ticket extends React.Component {
    render() {
        return(
            <div className="container">
                <div className="row">
                    <TicketMaker offset="" name="LD40" badgeType="info" badge="GAME" content={ticketContent.ld40} />
                    <TicketMaker offset="offset-md-1" name="LD39" badgeType="info" badge="GAME" content={ticketContent.ld39} />
                    <TicketMaker offset="offset-md-1" name="SCHOOL" badgeType="secondary" badge="WEB" content={ticketContent.schoolweb} />
                </div>
            </div>
        );
    }
}

const TicketMaker = (props: any) => {
    return(
        <div className={`col-sm jumbotron ticket ${props.offset}`}>
            <h2>{props.name} <span className={`badge badge-${props.badgeType}`}>{props.badge}</span></h2>
            <hr/>

            <p className="ticket__paragraph">
                {props.content}
            </p>

            <Link to="/projects" className="ticket__link">READ MORE</Link>
        </div>
    );
};
