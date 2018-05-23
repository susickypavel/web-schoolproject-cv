import * as React from "react";
import { Link } from "react-router-dom";

// TODO
// For mobiles is "read more" not quite user experience friendly
// Try to make another version for mobiles (maybe?)
// MAYBE -> To let be read more visible whole time.

// TODO
// Make a component connected to redux store and get content for each
// Ticket from redux state.

interface IProps {
    name: string;
    content: string;
}

export class TicketModal extends React.Component<IProps> {
    render() {
        return(
            <div>
                <h2 className="font-h2">{this.props.name}</h2>

                <p className="rbt-light">
                    {this.props.content}
                </p>
            </div>
        );
    }
}

export const Ticket = (props: any) => {
    return(
        <div className={`col-sm jumbotron ticket ${props.offset}`}>
            <h2 className="font-h2">{props.name} <span className={`badge badge-${props.badgeType}`}>{props.badge}</span></h2>
            <hr/>

            <p className="ticket__paragraph">
                {props.content}
            </p>

            <Link to="/projects" className="ticket__link">READ MORE</Link>
        </div>
    );
};
