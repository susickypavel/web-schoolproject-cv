import * as React from "react";


// Make tickets with progress bar of each framework etc. i'm using right now
// Animate the progress bar? Filling?

export default class AboutPage extends React.Component {
    render() {
        return(
            <div>
                <ProgressBar progress="100%" name="HTML" backgroundColor="bg-success" />
                <ProgressBar progress="75%" name="CSS" backgroundColor="bg-danger" />
                <ProgressBar progress="30%" name="JAVASCRIPT" backgroundColor="bg-warning" />
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
        <div>
            <h2>{props.name}</h2>

            <div className="progress border border-dark">
                <div className={`progress-bar progress-bar-striped progress-bar-animated ${props.backgroundColor}`} style={styles} />
            </div>
        </div>
    );
};
