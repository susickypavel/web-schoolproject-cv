import * as React from "react";
import { reduxForm, Field, WrappedFieldProps } from "redux-form";
import { FormErrors } from "redux-form/index";

const renderField = (field: WrappedFieldProps) => {

    const { touched, error, visited } = field.meta;

    return(
        <div className={`form-group ${field.style}`}>
            <input
                type={field.type}
                placeholder={field.label}
                {...field.input}
                className={`form-control ${touched ? error == undefined ? "is-valid" : "is-invalid" : ""}`}
            />
            <span className="invalid-feedback">{touched ? error : null}</span>
            <span className="valid-feedback">{touched && error == undefined ? "That's right!" : null}</span>
        </div>
    );
};

const renderTextArea = (field: WrappedFieldProps) => {

    const { touched, error } = field.meta;

    return(
        <div>
            <textarea
                className={`form-control contactForm-textarea ${touched ? error == undefined ? "is-valid" : "is-invalid" : ""}`}
                placeholder={field.label}
                {...field.input}
            />
            <span className="invalid-feedback">{touched ? error : null}</span>
            <span className="valid-feedback">{touched && error == undefined ? "That's right!" : null}</span>
        </div>
    );
};

const ContactForm = (props: any) => {

    const { handleSubmit } = props;

    return(
        <form onSubmit={handleSubmit} className="container mt-3">
            <div className="form-row">
                <Field
                    name="email"
                    component={renderField}
                    type="text"
                    label="YOUR EMAIL"
                    style="col-md-6"
                />
                <Field
                    name="name"
                    component={renderField}
                    type="text"
                    label="YOUR NAME"
                    style="col-md-6"
                />
            </div>
                <Field
                    name="message"
                    component={renderTextArea}
                    label="YOUR MESSAGE"
                />
            <button type="submit" className="btn btn-primary mt-3">SEND</button>
        </form>
    );
};


interface FormData {
    name: string;
    email: string;
    message: string;
}

const validate = (values: FormData) => {
    const errors: FormErrors<FormData> = {};

    const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!values.name) {
        errors.name = "Required";
    }
    if (!values.email) {
        errors.email = "Required";
    } else {
        if (!EMAIL_REGEX.test(values.email)) {
            errors.email = "Invalid email";
        }
    }

    if (!values.message) {
        errors.message = "Required";
    }

    return errors;
};

export default reduxForm({
    form: "contact",
    validate
})(ContactForm);
