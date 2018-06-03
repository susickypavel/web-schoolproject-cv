import * as React from "react";

export default class AboutPage extends React.Component {
    render() {
        return(
            <div className="m-3">
                <div className="row">
                    <ProgressBar
                        progress="95%"
                        name="HTML &amp; CSS"
                        backgroundColor="bg-success"
                    />
                    <ProgressBar
                        progress="95%"
                        name="JAVASCRIPT"
                        backgroundColor="bg-danger"
                    />
                    <ProgressBar
                        progress="50%"
                        name="PHP"
                        backgroundColor="bg-warning"
                    />
                    <ProgressBar
                        progress="85%"
                        name="TYPESCRIPT"
                        backgroundColor="bg-primary"
                    />
                </div>
            </div>
        );
    }
}

interface PropsSTC {
    backgroundColor: string;
    progress: string;
    name: string;
}

const ProgressBar = (props: PropsSTC) => {
    const styles = {
        width: props.progress
    };

    return(
        <div className="col-sm">
            <div className="border border-secondary p-3 mh-320 shadow">
                <h2 className="font-h2">{props.name}</h2>

                <div className="progress border border-dark">
                    <div className={`progress-bar progress-bar-striped progress-bar-animated ${props.backgroundColor}`} style={styles} />
                </div>
            </div>
        </div>
    );
};
