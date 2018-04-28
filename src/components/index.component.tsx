import * as React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

/* Components */

export default class Index extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Example}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

const Example = () => {
    return(
        <div>
            <button className="btn btn-danger">TEST</button>
            <img src={require("../assets/test.png")} alt="test"/>
        </div>
    );
};
