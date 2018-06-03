import * as React from "react";
import { connect } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { IRState } from "../reducers/index";
import { UnsetActiveTicket } from "../actions";
// COMPONENTS
import Ticket, { ITicket } from "../containers/ticket.container";

// TYPES
import { ChangeEventHandler } from "react/index";

interface IProps {
    tickets: object[];
    activeProject: ITicket;
    UnsetActiveTicket(): { type: string };
}

interface IState {
    badges: string[];
}

interface IPropsSTC {
    value: string;
    badgeType: string;
    handler: ChangeEventHandler<HTMLInputElement>;
}

class ProjectPage extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props);

        this.state = {
            badges: ["GAME", "WEB"]
        };

        this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
    }

    renderTickets() {
        return(
            this.props.tickets.map((ticket: any) => {
                if (this.state.badges.indexOf(ticket.badge) > - 1) {
                    return (
                        <CSSTransition
                            key={ticket.name}
                            classNames="example"
                            timeout={{ enter: 500, exit: 300 }}
                        >
                            <Ticket key={ticket.name} ticket={ticket}/>
                        </CSSTransition>
                    );
                }
            })
        );
    }

    handleCheckBoxChange(e: any) {

        const { checked, value } = e.target;

        if (checked) {
            this.setState({
                badges: [...this.state.badges, value ]
            });
        } else {
            this.setState({
                badges: this.state.badges.filter((badge: string) => badge != value)
            });
        }
    }

    render() {
        return(
            <div className="m-3">
            {
                !this.props.activeProject.activated ?
                <div>
                    <div className="jumbotron border border-secondary">
                        <CheckBox value="WEB" badgeType="secondary" handler={this.handleCheckBoxChange}/>
                        <CheckBox value="GAME" badgeType="info" handler={this.handleCheckBoxChange}/>
                    </div>

                    <TransitionGroup className="d-flex flex-wrap justify-content-center">
                        {this.renderTickets()}
                    </TransitionGroup>
                </div> :

                <div className="activeTicket text-left">
                    <h3 className="rbt-bold font-big text-uppercase">{this.props.activeProject.payload.name}</h3>

                    <p className="rbt-regular alert alert-danger">{this.props.activeProject.payload.content}</p>

                    <p className="rbt-regular alert alert-warning">Made in: {this.props.activeProject.payload.date}</p>

                    <p className="alert alert-success rbt-regular">
                        You can visit this project at this <a href={this.props.activeProject.payload.link} className="rbt-bold">LINK</a>
                    </p>

                    <div>
                        <h3 className="rbt-bold font-big">Used tools: </h3>
                        <ul className="list-group maxWidth-300">
                            {
                                this.props.activeProject.payload.tools.map((tool) => {
                                    return <li className="list-group-item" key={tool}>{tool}</li>;
                                })
                            }
                        </ul>
                    </div>
                    <div className="text-center mt-3">
                        <button className="btn btn-danger" onClick={this.props.UnsetActiveTicket}>Go back to List</button>
                    </div>
                </div>
            }
            </div>
        );
    }
}

const CheckBox = (props: IPropsSTC) => {
    return(
        <div className="checkbox-holder">
            <div className="checkbox-name rbt-bold">{props.value}</div>
            <input type="checkbox" className="checkbox-switch" value={props.value} onChange={props.handler} defaultChecked={true}/>
        </div>
    );
};

function mapStateToProps(state: IRState) {
    return {
        tickets: state.ticketList,
        activeProject: state.activeTicket
    };
}

export default connect(mapStateToProps, { UnsetActiveTicket })(ProjectPage);
