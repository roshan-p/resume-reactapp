import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Homepage from './homepage';
import Contact from './contact';
import Aboutme from './aboutme';
import Projects from './projects';
import Resume from './resume';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/aboutme" component={Aboutme} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/resume" component={Resume} />
    </Switch>
)

export default Main;