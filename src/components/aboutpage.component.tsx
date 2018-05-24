import * as React from "react";

// Make tickets with progress bar of each framework etc. i'm using right now
// Animate the progress bar? Filling?

export default class AboutPage extends React.Component {
    render() {
        return(
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm">
                        <ProgressBar progress="99%" name="HTML" backgroundColor="bg-success" />
                    </div>
                    <div className="col-sm">
                        <ProgressBar progress="87%" name="CSS" backgroundColor="bg-danger" />
                    </div>
                    <div className="col-sm">
                        <ProgressBar progress="95%" name="JAVASCRIPT" backgroundColor="bg-warning" />
                    </div>
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
        <div className="border border-secondary p-3">
            <h2 className="font-h2">{props.name}</h2>

            <div className="progress border border-dark">
                <div className={`progress-bar progress-bar-striped progress-bar-animated ${props.backgroundColor}`} style={styles} />
            </div>
        </div>
    );
};
