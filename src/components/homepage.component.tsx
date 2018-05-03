import * as React from "react";

interface IProps {

}

export  default class extends React.Component<IProps> {
    render() {
        return(
            <div className="homePage">
                <div className="homepage__personality jumbotron container">
                    <h1>Hi, i'm Pavel Sušický</h1>
                    <p className="lead">Young web developer from Czech Republic!</p>
                    <ul className="personality__links">
                        <li>LINK</li>
                        <li>LINK</li>
                        <li>LINK</li>
                    </ul>
                </div>
            </div>
        );
    }
}

const TimeLine = () => {
    return(
        <div className="container">
            <ul>
                <li className="info">
                    <span>29.01.2001</span>
                    <div>This is the latest news</div>
                </li>
                <li className="selected">
                    <span>39 min</span>
                    <div>This is the second latest news</div>
                </li>
                <li>
                    <span>42 min</span>
                    <div>This is the third latest news</div>
                </li>
            </ul>
        </div>
    );
};
