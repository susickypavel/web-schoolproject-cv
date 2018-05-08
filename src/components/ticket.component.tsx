import * as React from "react";
import { Link } from "react-router-dom";

interface IProps {

}

// TODO
// For mobiles is "read more" not quire user experience friendly
// Try to make another version for mobiles (maybe?)

// TODO
// Make a component connected to redux store and get content for each
// Ticket from redux state.

export default class Ticket extends React.Component<IProps> {
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm jumbotron ticket">
                        <h2>LD40 <span className="badge badge-info">GAME</span></h2>
                        <hr/>

                        <p className="ticket__paragraph">
                            I have participated in a game jam Ludum Dare 40.
                            It was my second personal game jam in my life.
                            The theme was "more you have the worse it is".
                        </p>

                        <Link to="/work" className="ticket__link">READ MORE</Link>
                    </div>
                    <div className="col-sm jumbotron offset-md-1 ticket">
                        <h2>LD39 <span className="badge badge-info">GAME</span></h2>
                        <hr/>

                        <p className="ticket__paragraph">
                            I have participated in a game jam Ludum Dare 39.
                            It was my first personal game jam in my life.
                            The theme was "running out of the power".
                        </p>

                        <Link to="/work" className="ticket__link">READ MORE</Link>
                    </div>
                    <div className="col-sm jumbotron offset-md-1 ticket">
                        <h2>SCHOOL <span className="badge badge-secondary">WEB</span></h2>
                        <hr/>

                        <p className="ticket__paragraph">
                            This was my web project in January 2018 for school subject
                            web applications. The theme was "Future of IT".
                        </p>

                        <Link to="/work" className="ticket__link">READ MORE</Link>
                    </div>
                </div>
            </div>
        );
    }
}

const TicketMaker = (props: any) => {
    return(
        <div className="col-sm jumbotron ticket">
            <h2>{props.name} <span className="badge badge-info">{props.badge}</span></h2>
            <hr/>

            <p className="ticket__paragraph">
                {props.content}
            </p>

            <Link to="/work" className="ticket__link">READ MORE</Link>
        </div>
    );
};
