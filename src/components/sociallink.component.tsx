import * as React from "react";

interface IProps {
    name: string;
    desc: string;
    link: string;
}

export default class extends React.Component<IProps> {
    render() {
        return(
            <li className="list-group-item-m height-70px">
                <a href={this.props.link} className="text-light rbt-light">
                    <img src={require(`../assets/icons/social/${this.props.name}.svg`)} alt={this.props.name} width="40" height="40" className="mx-3 disableLink"/>
                    <span>{this.props.desc}</span>
                </a>
            </li>
        );
    }
}
