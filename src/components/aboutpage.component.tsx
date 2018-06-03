import * as React from "react";

export default class AboutPage extends React.Component {
    render() {
        return(
            <div className="mx-3">
                <ProgressBar
                    progress="95%"
                    name="HTML &amp; CSS"
                    backgroundColor="bg-success"
                    lib={["HTML5", "CSS3", "LESS", "SASS", "BEM"]}
                />
                <ProgressBar
                    progress="95%"
                    name="JAVASCRIPT"
                    backgroundColor="bg-danger"
                    lib={["REACT", "REDUX", "ANGULAR", "JQUERY", "NODE.JS"]}
                />
                <ProgressBar
                    progress="50%"
                    name="PHP"
                    backgroundColor="bg-warning"
                    lib={["SYMFONY", "NETTE"]}
                />
                <ProgressBar
                    progress="85%"
                    name="TYPESCRIPT"
                    backgroundColor="bg-primary"
                />
            </div>
        );
    }
}

interface PropsSTC {
    backgroundColor: string;
    progress: string;
    name: string;
    lib?: string[];
}

const ProgressBar = (props: PropsSTC) => {
    const styles = {
        width: props.progress
    };

    return(
        <div className="card p-3 mb-1">
            <h2 className="rbt-bold font-big">{props.name}</h2>

            <div className="progress border border-dark mb-3">
                <div className={`progress-bar progress-bar-striped progress-bar-animated ${props.backgroundColor}`} style={styles} />
            </div>
            <ul className="list-group">
                {
                    props.lib ? props.lib.map((item: string) => {
                        return <li className="list-group-item" key={item}>{item}</li>;
                    }) : null
                }
            </ul>
        </div>
    );
};
