import React, {Component} from 'react';
import {connect} from 'react-redux';
import {call} from "../../../actions/api";
import {ISSUE_ACTIONS, ISSUE_COUNT_ACTIONS, setClosedCount, setOpenCount} from "../reducers/issues";

import List from '../components/List';
import NavBar from '../../Common/components/NavBar';
import {setState} from "../reducers/filter";
import {navToPage} from "../../Pagination/reducers/pagination";

class ListContainer extends Component {
    render = () => (
        <React.Fragment>
            <NavBar/>
            <List issues={this.props.issues} filter={this.props.filter} counts={this.props.counts}
                  stateHandler={this.handleFilterStateChange}/>
        </React.Fragment>
    );

    handleFilterStateChange = (state) => {
        this.props.dispatch(navToPage(1));
        this.props.dispatch(setState(state));
    };

    componentWillMount = () => {
        this.loadCounts();
        this.loadIssues();
    };

    componentDidUpdate = (prevProps) => {
        if (
            // TODO: bug, pagination and filter action goes through this 2 times
        JSON.stringify(this.props.pagination) !== JSON.stringify(prevProps.pagination) ||
        JSON.stringify(this.props.filter) !== JSON.stringify(prevProps.filter)
        ) {
            this.loadIssues();
        }
    };

    loadIssues = () => {
        this.props.dispatch(
            call(
                ISSUE_ACTIONS,
                `${__GITHUB_API_URL__}search/issues?q=repo:${this.props.filter.repo}+type:${this.props.filter.type}+state:${this.props.filter.state}&page=${this.props.pagination.currentPage}&per_page=${this.props.pagination.perPage}`
            )
        );
    };

    loadCounts = () => {
        this.props.dispatch(call(
            ISSUE_COUNT_ACTIONS,
            `${__GITHUB_API_URL__}search/issues?q=repo:${this.props.filter.repo}+type:${this.props.filter.type}+state:open&per_page=1`,
            null,
            'GET',
            (data) => this.props.dispatch(setOpenCount(data.total_count)),
            () => {
            },
            {},
            false
        ));

        this.props.dispatch(call(
            ISSUE_COUNT_ACTIONS,
            `${__GITHUB_API_URL__}search/issues?q=repo:${this.props.filter.repo}+type:${this.props.filter.type}+state:closed&per_page=1`,
            null,
            'GET',
            (data) => this.props.dispatch(setClosedCount(data.total_count)),
            () => {
            },
            {},
            false
        ));
    };
}

const mapStateToProps = (state, ownProps) => ({
    pagination: state.pagination,
    filter: state.filter,
    counts: {
        open: state.issues.openCount,
        closed: state.issues.closedCount
    },
    issues: state.issues.items
});

export default connect(mapStateToProps)(ListContainer);