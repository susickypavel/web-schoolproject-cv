import * as React from "react";

interface IProps {

}

export default class extends React.Component<IProps> {
    render() {
        return(
            <nav className="navigation">
                <ul className="navigation__ul">
                    <li>
                        <div className="navigation__item">
                            <p>TEST</p>
                            <img src={require("../assets/emoji.png")} alt=""/>
                        </div>
                        <div className="navigation__item">
                            <p>TEST</p>
                            <img src={require("../assets/emoji.png")} alt=""/>
                        </div>
                        <div className="navigation__item">
                            <p>TEST</p>
                            <img src={require("../assets/emoji.png")} alt=""/>
                        </div>
                    </li>
                </ul>
            </nav>
        );
    }
}
