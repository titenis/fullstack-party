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

    componentWillMount = () => this.loadIssues();

    componentDidUpdate = (prevProps) => {
        if (JSON.stringify(this.props.pagination) !== JSON.stringify(prevProps.pagination)) {
            this.loadIssues();
        }
    };

    loadIssues = () => {
        this.props.dispatch(
            call(
                ISSUE_ACTIONS,
                `${__GITHUB_API_URL__}repos/symfony/symfony/issues?page=${this.props.pagination.currentPage}&per_page=${this.props.pagination.perPage}`
            )
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    pagination: state.pagination,
    issues: state.issues.items
});

export default connect(mapStateToProps)(ListContainer);