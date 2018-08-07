import React, {Component} from 'react';
import {connect} from 'react-redux';

class Single extends Component {
    render = () => {
        return (
            <div>
                Single
            </div>
        );
    };
}

const mapStateToProps = (state, ownProps) => ({});

export default connect(mapStateToProps)(Single);