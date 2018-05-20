import * as React from "react";

import Link from "./sociallink.component";
import { Ticket } from "./ticket.component";

export  default class extends React.Component {
    render() {
        return(
            <div>
                <div className="jumbotron container shadow homepage__personality">
                    <h1>HI, I'M PAVEL SUŠICKÝ</h1>
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
                        <Ticket offset="" name="LD40" badgeType="info" badge="GAME" content="My second entry to a game jam Ludum Dare. December 2017. Worktools: Unity, Visual Studio, Bosca ceoil, GIMP." />
                        <Ticket offset="offset-md-1" name="LD39" badgeType="info" badge="GAME" content="My first entry to a game jam Ludum Dare. August 2017. Worktools: Unity, Visual Studio, Blender." />
                        <Ticket offset="offset-md-1" name="SCHOOL" badgeType="secondary" badge="WEB" content="My first website for school project. January 2018. Worktools: Visual Studio Code, GIMP." />
                    </div>
                </div>
            </div>
        );
    }
}
