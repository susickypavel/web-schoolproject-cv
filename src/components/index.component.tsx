import * as React from "react";
import { BrowserRouter, Route, Switch, Router, HashRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

/* Components */
import Homepage from "./homepage.component";
import Projectpage from "./projectspage.component";
import ContactPage from "./contactpage.component";
import AboutPage from "./aboutpage.component";
import Navigation from "./navigation.component";

export default class Index extends React.Component {
    render() {
        return(
            <HashRouter>
                <Route render={({ location }) => (
                    <div>
                        <Navigation />

                        <TransitionGroup>
                            <CSSTransition
                                key={location.key}
                                timeout={1000}
                                classNames="fade"
                                >
                                <Switch location={location}>
                                    <Route path="/projects" component={Projectpage}/>
                                    <Route path="/contact" component={ContactPage}/>
                                    <Route path="/about" component={AboutPage}/>
                                    <Route exact={true} path="/" component={Homepage}/>
                                </Switch>
                            </CSSTransition>
                        </TransitionGroup>
                    </div>
                )} />
            </HashRouter>
        );
    }
}
