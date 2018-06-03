import * as React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { SetActiveTicket } from "../actions";

interface IProps {
    ticket: any;
    SetActiveTicket(ticket: ITicket): { type: string, payload: ITicket};
}

export interface ITicket {
    payload: {
        name: string;
        badge: string;
        content: string;
        tools: string[];
        link: string;
        date: string;
    };
    activated: boolean;
}

class Ticket extends React.Component<IProps> {
    render() {
        return(
            <div className="card card-m mx-2 mb-3 shadow" onClick={() => this.props.SetActiveTicket(this.props.ticket)}>
                <img className="card-img-top border-bottom" src={require("../assets/images/logo.svg")} alt="" width="250" height="250"/>
                <div className={`card-body ${this.props.ticket.badge}`}>
                    <h2 className="card-title text-uppercase rbt-bold">{this.props.ticket.name}</h2>
                    <p className="card-text rbt-regular">{this.props.ticket.content}</p>
                </div>
            </div>
        );
    }
}

export default connect(null, { SetActiveTicket })(Ticket);
