import React, {Component} from 'react';
import {connect} from 'react-redux';
import {call} from "../../../actions/api";
import NavBar from '../../Common/components/NavBar';
import Issue from '../components/Issue';
import {SINGLE_ISSUE_ACTIONS} from "../reducers/singleIssue";
import {COMMENTS_ACTIONS} from "../reducers/comments";

class IssueContainer extends Component {
    render = () => {
        return (
            <div>
                <NavBar/>
                <Issue issue={this.props.issue} comments={this.props.comments}/>
            </div>
        );
    };

    componentWillMount() {
        this.props.dispatch(call(
            SINGLE_ISSUE_ACTIONS,
            `${__GITHUB_API_URL__}repos/symfony/symfony/issues/${this.props.params.issue_number}`
        ));

        this.props.dispatch(call(
            COMMENTS_ACTIONS,
            `${__GITHUB_API_URL__}repos/symfony/symfony/issues/${this.props.params.issue_number}/comments`
        ));
    };
}

const mapStateToProps = (state, ownProps) => ({
    issue: state.singleIssue.singleItem,
    comments: state.comments.comments
});

export default connect(mapStateToProps)(IssueContainer);