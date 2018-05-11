import * as React from "react";

import Link from "./sociallink.component";
import { Ticket } from "./ticket.component";

import { ticketContent } from "../content";

export  default class extends React.Component {
    render() {
        return(
            <div className="homePage">
                <div className="jumbotron container shadow homepage__personality">
                    <h1>Hi, i'm Pavel Sušický</h1>
                    <p className="lead">Young web developer from Czech Republic!</p>
                    <hr/>
                    <ul className="personality__links">
                        <Link name="mail" tip="pavels.sus@gmail.com" color="red" link="#"/>
                        <Link name="linkedin" tip="Pavel Sušický" color="lime" link="#"/>
                        <Link name="github" tip="Thesoreon" color="cyan" link="https://github.com/Thesoreon"/>
                    </ul>
                </div>

                <div className="container">
                    <div className="row">
                        <Ticket offset="" name="LD40" badgeType="info" badge="GAME" content={ticketContent[0].content} />
                        <Ticket offset="offset-md-1" name="LD39" badgeType="info" badge="GAME" content={ticketContent[1].content} />
                        <Ticket offset="offset-md-1" name="SCHOOL" badgeType="secondary" badge="WEB" content={ticketContent[2].content} />
                    </div>
                </div>

            </div>
        );
    }
}
