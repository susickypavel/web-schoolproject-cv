import * as React from "react";
import { NavLink } from "react-router-dom";

import SocialLink from "./sociallink.component";

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
    // "☰" : "✕"
    render() {
        return(
            <div className="full-height">
                <div className="w-100 navbar-bg height-70px sticky-top navbar-flex">
                    <div className="sidebar-toggle" onClick={this.collapse}>{this.state.collapsed ? "☰" : "✕"}</div>
                    <NavLink to="/">
                        <img src={require("../assets/images/logo.svg")} className="img-fluid mx-3 height-70px" alt="logo" width="70" height="70"/>
                    </NavLink>
                    <h1 className="rbt-bold">Pavel Sušický</h1>
                </div>

                <div className={`sidebar ${this.state.collapsed ? "widthIn-idle" : "widthIn-transition"}`}>
                    <h2 className="my-3 ml-3 rbt-bold font-big">Navigation</h2>
                    <ul className="list-group">
                        <Link name="HOME" path="/" img="homepage-light"/>
                        <Link name="MY WORK" path="/projects" img="project-light"/>
                        <Link name="ABOUT" path="/about" img="profile-light"/>
                        <Link name="CONTACT" path="/contact" img="contact-light"/>
                    </ul>

                    <h2 className="my-3 ml-3 rbt-bold font-big">Social Links</h2>

                     <ul className="list-group">
                        <SocialLink name="github" link="https://github.com/Thesoreon" desc="Thesoreon"/>
                        <SocialLink name="linkedin" link="#" desc="Pavel Sušický"/>
                    </ul>
                </div>

                <div className={`${this.state.collapsed ? "content-idle" : "content-moved"}`}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

interface ILink {
    path: string;
    img: string;
    name: string;
}

const Link = (props: ILink) => {
    return(
        <li className="list-group-item-m height-70px">
            <NavLink exact={true} to={props.path} className="text-light rbt-light" activeClassName="activeLink">
                <img src={require(`../assets/icons/${props.img}.svg`)} alt={props.img} width="40" height="40" className="mx-3 disableLink"/>
                <span>{props.name}</span>
            </NavLink>
        </li>
    );
};
