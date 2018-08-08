import React, {Component} from 'react';
import {connect} from 'react-redux';
import {logout} from "../actions/Actions";

class LogoutContainer extends Component {

    render = () => null;

    componentWillMount() {
        this.props.dispatch(logout());
        window.location.href = __ROOTURL__;
    }
}

const mapStateToProps = (state, ownProps) => ({});

export default connect(mapStateToProps)(LogoutContainer);

