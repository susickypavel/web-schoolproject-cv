import * as React from "react";
import { connect } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";

// COMPONENTS
import { TicketModal } from "./ticket.component";

// TYPES
import { ChangeEventHandler } from "react/index";

interface IProps {
    tickets: object[];
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
                            <TicketModal name={ticket.name} content={ticket.content} key={ticket.name}/>
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
                badges: this.state.badges.filter((badge: any) => badge != value)
            });
        }
    }

    render() {
        return(
            <div>
                <div>
                    <CheckBox value="WEB" badgeType="secondary" handler={this.handleCheckBoxChange}/>
                    <CheckBox value="GAME" badgeType="info" handler={this.handleCheckBoxChange}/>
                </div>

                <TransitionGroup>
                    {this.renderTickets()}
                </TransitionGroup>
            </div>
        );
    }
}

const CheckBox = (props: IPropsSTC) => {
    return(
        <div className="d-inline">
            <span className={`badge badge-${props.badgeType}`}>{props.value}</span>
            <input type="checkbox" value={props.value} onChange={props.handler} defaultChecked={true}/>
        </div>
    );
};

function mapStateToProps(state: any) {
    return {
        tickets: state.ticketList
    };
}

export default connect(mapStateToProps)(ProjectPage);
