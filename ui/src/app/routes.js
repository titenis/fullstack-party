import React from 'react';
import {Route, Router} from 'react-router';

import App from './modules/App'
import Login from './modules/Auth/Login';
import List from './modules/Issues/List';
import Single from './modules/Issues/Single';

import {requireAuth} from './modules/Auth/security'

const Routes = ({history, store}) => (
    <Router history={history}>
        <Route path='login' component={Login}/>
        <Route path='/' component={App} onEnter={requireAuth(store, history)}>
            <Route path='list' component={List}>
                <Route path=':id' component={Single}/>
            </Route>
        </Route>
    </Router>
);

export default Routes;