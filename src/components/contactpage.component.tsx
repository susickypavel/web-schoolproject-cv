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
            <div className="spinner mb-3">
                <div className="spinner-circle" />
                <p className="rbt-bold mt-3">Hold on please, we're sending your message</p>
            </div>
        );
    }

    render() {
        return(
            <div className="mx-3">
                <h2 className="rbt-bold font-big">Send me a mail with this working form!</h2>
                {this.state.pending ? this.renderSpinner() : null}
                <ContactForm onSubmit={this.handleSubmit}/>
            </div>
        );
    }
}
