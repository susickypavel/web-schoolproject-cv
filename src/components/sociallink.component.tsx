import * as React from "react";

interface IProps {
    name: string;
    tip: string;
    color: string;
    link: string;
}

interface IState {
    activeClass: string;
}

export default class extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props);

        this.state = {
            activeClass: "personality__popup"
        };

        this.switchOnPopUp = this.switchOnPopUp.bind(this);
        this.switchOffPopUp = this.switchOffPopUp.bind(this);
    }

    switchOnPopUp() {
        this.setState({
            activeClass: "personality__popup--shown"
        });
    }

    switchOffPopUp() {
        this.setState({
            activeClass: "personality__popup"
        });
    }

    render() {
        return(
            <li>
                <div className={this.state.activeClass}>{this.props.tip}</div>
                <a href={this.props.link} onMouseEnter={this.switchOnPopUp} onMouseLeave={this.switchOffPopUp}>
                    <img src={require(`../assets/icons/social/${this.props.name}.svg`)} alt={this.props.name} width="48" height="48" className={`personality__link border border-dark ${this.props.color}`} />
                </a>
            </li>
        );
    }
}
