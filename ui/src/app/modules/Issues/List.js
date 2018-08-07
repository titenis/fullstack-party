import React, {Component} from 'react';
import {connect} from 'react-redux';
import {call, GITHUB_ACTIONS} from "../../actions/api";

class List extends Component {

    render = () => {
        return (
            <div>
                List
            </div>
        );
    };

    componentWillMount() {
        this.props.dispatch(call(GITHUB_ACTIONS,
            __GITHUB_API_URL__ + 'issues?filter=all',
            null, 'GET',
            (data) => {
                console.log(data);
            },
        ));
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(state);

    return ({});
};

export default connect(mapStateToProps)(List);