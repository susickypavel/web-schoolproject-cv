import * as React from "react";

import Link from "./sociallink.component";

export  default class extends React.Component {
    render() {
        return(
            <div>
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/z1PSbDmV8Gw" />
                </div>
                <div className="m-3">
                    <h2 className="font-big rbt-bold">Welcome!</h2>

                    <p>I would like to introduce you to my Curriculum vitae. At the start of our exploring, let's see who am i! </p>

                    <h2 className="font-big rbt-bold">Who am i?</h2>

                    <p>I'm seventeen years old student &amp; Junior web developer from Czech Republic interested in information technology, mainly programming industry.</p>

                </div>
            </div>
        );
    }
}
