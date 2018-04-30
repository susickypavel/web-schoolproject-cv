import * as React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

/* Components */
import Homepage from "./homepage.component";

export default class Index extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Homepage}/>
                </Switch>
            </BrowserRouter>
        );
    }
}
