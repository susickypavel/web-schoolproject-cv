import * as React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

/* Components */
import Homepage from "./homepage.component";
import Projectpage from "./projectspage.component";
import ContactPage from "./contactpage.component";
import AboutPage from "./aboutpage.component";
import Navigation from "./navigation.component";

export default class Index extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <div>
                    <Navigation />
                    <Switch>
                        <Route path="/projects" component={Projectpage}/>
                        <Route path="/contact" component={ContactPage}/>
                        <Route path="/about" component={AboutPage}/>
                        <Route exact={true} path="/" component={Homepage}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}
