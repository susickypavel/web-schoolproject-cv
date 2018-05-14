import * as React from "react";
import axios from "axios";
import { History } from "history";

import ContactForm from "../containers/contactform.container";

interface State {
    pending: boolean;
}

interface Props {
    history: History;
}

export default class ContactPage extends React.Component<Props, State> {

    constructor(props: any) {
        super(props);

        this.state = {
            pending: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values: any) {
        const promise = axios.post("https://web-portfolio-email.herokuapp.com/", values).then(() => {
            this.setState({ pending: false });

            this.props.history.push("/");
        });

        this.setState({ pending: true });
    }

    renderSpinner() {
        return(
            <div className="spinner">
                <div className="spinner-holder">
                    <div className="spinner-circle" />
                    <p>This might take a few seconds</p>
                </div>
            </div>
        );
    }

    render() {
        return(
            <div>
                {this.state.pending ? this.renderSpinner() : null}
                <img src={require("../assets/images/logo.svg")} alt="logo" className="img-fluid mx-auto d-block mt-3"/>
                <ContactForm onSubmit={this.handleSubmit}/>
            </div>
        );
    }
}
