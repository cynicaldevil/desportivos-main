import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Root from './Root';
import Home from './Home';
import About from './About';
import Events from './Events';
import Sponsors from './Sponsors';
import Contacts from './Contacts';

export default (
    <Router history={hashHistory}>
        <Route path="/" component={Root}>
            <IndexRoute component={Home} />
            <Route path="about" component={About}/>
            <Route path="events" component={Events} />
            <Route path="sponsors" component={Sponsors} />
            <Route path="contact-us" component={Contacts} />
        {/*<Route path="*" component={NoMatch} />*/}
        </Route>
    </Router>
);
