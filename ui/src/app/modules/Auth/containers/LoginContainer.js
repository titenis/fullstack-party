import React, {Component} from 'react';
import {connect} from 'react-redux';
import randomString from 'random-string';
import queryString from 'query-string';
import {API_ACTIONS, call} from "../../../actions/api";

import Login from '../components/Login';

class LoginContainer extends Component {

    redirectToLogin = () => {
        window.location.href = `${__GITHUB_URL__}login/oauth/authorize?client_id=${__CLIENT_ID__}&state=${randomString()}&redirect_uri=${__ROOTURL__}#/login/`;
    };

    render = () => (
        <Login redirectToLogin={this.redirectToLogin}/>
    );

    componentWillMount() {
        const codeAndState = extractCodeAndState();
        if (codeAndState.code && codeAndState.state) {
            this.props.dispatch(call(API_ACTIONS,
                __APIURL__ + 'fetch_token/' + codeAndState.code + '/' + codeAndState.state,
                null, 'GET',
                () => {
                    window.location.href = __ROOTURL__;
                }
            ));
        }
    }

    componentDidMount() {
        document.body.id = 'login';
    }

    componentWillUnmount() {
        document.body.id = '';
    }
}

const mapStateToProps = (state, ownProps) => ({});

export default connect(mapStateToProps)(LoginContainer);

const extractCodeAndState = () => {
    let parsed = queryString.parseUrl(window.location.href);

    if (Object.keys(parsed.query).length && parsed.query.code.length && parsed.query.state.length) {
        parsed.query.state = parsed.query.state.split('#/')[0];
        return parsed.query;
    }
    return false;
};