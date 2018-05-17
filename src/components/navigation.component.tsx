import * as React from "react";
import { NavLink } from "react-router-dom";

interface State {
    collapsed: boolean;
}

export default class extends React.Component<{}, State> {

    constructor(props: any) {
        super(props);

        this.state = {
            collapsed: false
        };

        this.collapse = this.collapse.bind(this);
    }

    collapse() {
        this.setState({ collapsed: !this.state.collapsed });
    }

    render() {
        return(
            <nav className="navigation">
                <ul className="navigation__ul">
                    <div className="collapse-menu border-bottom border-secondary" onClick={this.collapse}>{this.state.collapsed ? "☰" : "✕"}</div>
                    <div className={`ul__links ${this.state.collapsed ? "closed" : ""}`}>
                        <li>
                            <Link name="HOME" path="/" img="homepage"/>
                        </li>
                        <li>
                            <Link name="MY WORK" path="/projects" img="project"/>
                        </li>
                        <li>
                            <Link name="ABOUT" path="/about" img="profile"/>
                        </li>
                        <li>
                            <Link name="CONTACT" path="/contact" img="contact"/>
                        </li>
                    </div>
                </ul>
            </nav>
        );
    }
}

const Link = (props: any) => {
    return(
        <NavLink exact={true} to={props.path} className="navigation__item" activeClassName="activeNavLink">
            <p>{props.name}</p>
            <img src={require(`../assets/icons/${props.img}.svg`)} alt={props.img} width="65" height="65" className="navLinkImg"/>
        </NavLink>
    );
};
