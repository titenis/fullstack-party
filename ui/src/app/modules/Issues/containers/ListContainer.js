import React, {Component} from 'react';
import {connect} from 'react-redux';
import {call} from "../../../actions/api";
import {ISSUE_ACTIONS} from "../reducers/issues";

import List from '../components/List';
import NavBar from '../../Common/components/NavBar';

class ListContainer extends Component {

    render = () => (
        <React.Fragment>
            <NavBar/>
            <List issues={this.props.issues}/>
        </React.Fragment>
    );

    componentWillMount() {
        this.props.dispatch(call(ISSUE_ACTIONS, __GITHUB_API_URL__ + 'repos/symfony/symfony/issues'));
    }
}

const mapStateToProps = (state, ownProps) => ({
    issues: state.issues.items
});

export default connect(mapStateToProps)(ListContainer);