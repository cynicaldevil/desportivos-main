import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Root from './Root';
import Home from './Home';
import About from './About';
import Events from './Events';
import ReachUs from './ReachUs';
import Contacts from './Contacts';
import Gallery from './Gallery';
import Register from './Register';

export default (
    <Router history={hashHistory}>
        <Route path="/" component={Root}>
            <IndexRoute component={Home} />
            <Route path="about" component={About}/>
            <Route path="events" component={Events} />
            <Route path="reach-us" component={ReachUs} />
            <Route path="register" component={Register} />
            <Route path="gallery" component={Gallery} />
            <Route path="contact-us" component={Contacts} />
        {/*<Route path="*" component={NoMatch} />*/}
        </Route>
    </Router>
);
