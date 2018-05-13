import * as React from "react";
import { connect } from "react-redux";

import ContactForm from "../containers/contactform.container";

export default class ContactPage extends React.Component {

    handleSubmit(values: any) {
        console.log(values);
    }

    render() {
        return(
            <div>
                <img src={require("../assets/images/logo.svg")} alt="logo" className="img-fluid mx-auto d-block mt-3"/>
                <ContactForm onSubmit={this.handleSubmit}/>
            </div>
        );
    }
}
