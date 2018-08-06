import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import {Provider} from 'react-redux'
import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import {apiMiddleware} from 'redux-api-middleware'
import {obj as history} from './utils/history';
import {syncHistoryWithStore} from 'react-router-redux';

import reducers from './reducers/rootReducer';
import Routes from './routes';

const store = createStore(
    reducers,
    applyMiddleware(...[thunk, apiMiddleware]),
);

ReactDOM.render((
    <AppContainer>
        <Provider store={store}>
            <Routes history={syncHistoryWithStore(history, store)} store={store}/>
        </Provider>
    </AppContainer>
), document.getElementById('app-root'));
