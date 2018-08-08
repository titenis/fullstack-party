import React, {Component} from 'react';
import {connect} from 'react-redux';

class App extends Component {
    render = () => {
        return (
            <React.Fragment>
                {this.props.children}
            </React.Fragment>
        );
    };
}

const mapStateToProps = (state, ownProps) => ({});

export default connect(mapStateToProps)(App);