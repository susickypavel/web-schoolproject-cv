import * as React from "react";

// Make tickets with progress bar of each framework etc. i'm using right now
// Animate the progress bar? Filling?

export default class AboutPage extends React.Component {
    render() {
        return(
            <div className="container">
                <div className="row">
                    <ProgressBar
                        progress="95%"
                        name="HTML &amp; CSS"
                        backgroundColor="bg-success"
                        test={["HTML5", "CSS3", "LESS"]}
                    />
                    <ProgressBar
                        progress="95%"
                        name="JAVASCRIPT"
                        backgroundColor="bg-danger"
                        test={["NODE.JS", "REACT", "ANGULAR", "JQUERY"]}
                    />
                    <ProgressBar
                        progress="50%"
                        name="PHP"
                        backgroundColor="bg-warning"
                        test={["Nette", "Symfony"]}
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
    test: string[];
}

const ProgressBar = (props: PropsSTC) => {
    const styles = {
        width: props.progress
    };

    return(
        <div className="col-sm my-3">
            <div className="border border-secondary p-3 mh-320 shadow">
                <h2 className="font-h2">{props.name}</h2>

                <div className="progress border border-dark">
                    <div className={`progress-bar progress-bar-striped progress-bar-animated ${props.backgroundColor}`} style={styles} />
                </div>

                <ul className="list-group mt-3">
                    {
                        props.test.map((item: string) => {
                            return(
                                <li className="list-group-item d-flex justify-content-between align-items-center rbt-light" key={item}>
                                    {item}
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </div>
    );
};
