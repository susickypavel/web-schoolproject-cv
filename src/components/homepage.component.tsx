import * as React from "react";

import Link from "./sociallink.component";
import Timeline from "./timeline.component";

interface IProps {

}

export  default class extends React.Component<IProps> {
    render() {
        return(
            <div className="homePage">
                <div className="homepage__personality jumbotron container shadow p-3 mb-5 bg-white rounded">
                    <h1>Hi, i'm Pavel Sušický</h1>
                    <p className="lead">Young web developer from Czech Republic!</p>
                    <hr/>
                    <ul className="personality__links">
                        <Link name="mail" tip="pavels.sus@gmail.com" color="red" link="#"/>
                        <Link name="linkedin" tip="Pavel Sušický" color="lime" link="#"/>
                        <Link name="github" tip="Thesoreon" color="cyan" link="https://github.com/Thesoreon"/>
                    </ul>
                </div>

                <Timeline />

            </div>
        );
    }
}
