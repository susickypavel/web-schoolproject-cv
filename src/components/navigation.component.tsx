import * as React from "react";
import { NavLink } from "react-router-dom";

export default class extends React.Component {
    render() {
        return(
            <nav className="navigation">
                <ul className="navigation__ul">
                    <li>
                        <Link name="HOME" path="/" img="homepage"/>
                        <Link name="CONTACT" path="/contact" img="contact"/>
                        <Link name="MY WORK" path="/projects" img="project"/>
                    </li>
                </ul>
            </nav>
        );
    }
}

const Link = (props: any) => {
    return(
        <NavLink exact={true} to={props.path} className="navigation__item" activeClassName="activeNavLink">
            <p>{props.name}</p>
            <img src={require(`../assets/icons/${props.img}.svg`)} alt={props.img}  width="65" height="65" className="navLinkImg"/>
        </NavLink>
    );
};
