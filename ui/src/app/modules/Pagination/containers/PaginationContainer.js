import React, {Component} from 'react';
import {connect} from 'react-redux';
import Pagination from '../components/Pagination';
import {navNext, navPrev, navToPage} from "../reducers/pagination";

class PaginationContainer extends Component {

    handleNavTo = (page) => this.props.dispatch(navToPage(page));

    handleNavNext = () => this.props.dispatch(navNext());

    handleNavPrev = () => this.props.dispatch(navPrev());

    handler = {
        navToPage: this.handleNavTo,
        navNext: this.handleNavNext,
        navPrev: this.handleNavPrev
    };

    render = () => <Pagination pagination={this.props.pagination} handler={this.handler}/>
}

const mapStateToProps = (state) => ({
    pagination: state.pagination,
});

export default connect(mapStateToProps)(PaginationContainer);