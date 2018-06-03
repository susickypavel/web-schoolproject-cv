import * as React from "react";
import { reduxForm, Field, WrappedFieldProps } from "redux-form";
import { FormErrors } from "redux-form/index";

const renderField = (field: WrappedFieldProps) => {

    const { touched, error, visited } = field.meta;

    return(
        <div>
            <input
                type={field.type}
                placeholder={field.label}
                {...field.input}
                autoComplete="off"
            />
            <span>{touched ? error : null}</span>
            <span>{touched && error == undefined ? "That's right!" : null}</span>
        </div>
    );
};

const renderTextArea = (field: WrappedFieldProps) => {

    const { touched, error } = field.meta;

    return(
        <div>
            <textarea
                placeholder={field.label}
                {...field.input}
            />
            <span>{touched ? error : null}</span>
            <span>{touched && error == undefined ? "That's right!" : null}</span>
        </div>
    );
};

const ContactForm = (props: any) => {

    const { handleSubmit } = props;

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    name="email"
                    component={renderField}
                    type="text"
                    label="YOUR EMAIL"
                />
                <Field
                    name="name"
                    component={renderField}
                    type="text"
                    label="YOUR NAME"
                />
            </div>
                <Field
                    name="message"
                    component={renderTextArea}
                    label="YOUR MESSAGE"
                />
            <button type="submit">SEND</button>
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
