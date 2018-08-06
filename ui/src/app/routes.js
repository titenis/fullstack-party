import React from 'react';
import {Route, Router} from 'react-router';

import App from './modules/App'

const Routes = ({history, store}) => (
    <Router history={history}>
        <Route path='/' component={App}>
        </Route>
    </Router>
);

export default Routes;