import _ from 'lodash';
import React from 'react';
import Label from './Label';
import {Link} from 'react-router';
import Author from '../../Common/components/Author';
import Pagination from '../../Pagination/containers/PaginationContainer'
import Filter from './Filter';
import Moment from 'react-moment';

const List = ({issues, pagination, filter, counts, stateHandler}) => (
    <div className="container-fluid h-100-minus-navbar">
        <div className="row h-100">
            <div className="col-md list">
                <Filter filter={filter} counts={counts} stateHandler={stateHandler}/>
                <ul className="cards">
                    {_.map(issues, (issue) => (
                        <li className="card" key={issue.id}>
                            <div className="card-body">
                                <i className={issue.state === 'open' ? "icon-ico-open light-green" : "icon-ico-closed"}/>
                                <div className="issue">
                                    <Link to={`/issue/${issue.number}`} className="title">{issue.title}</Link>
                                    {_.map(issue.labels, (label) => <Label label={label} key={label.id}/>)}
                                </div>

                                <Link to={`/issue/${issue.number}`} className={"comments"}>{issue.comments}</Link>

                                <div className="issue-info">
                                    #{issue.number} opened <Moment fromNow>{issue.created_at}</Moment> by <Author
                                    user={issue.user}/>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>

                <Pagination/>
            </div>
            <div className="col-md d-none d-md-block list-bg h-100 text-center text-white">
                <div className="absolute-vertical-center">
                    <h2>Full Stack Developer Task</h2>
                    <div className="by-logo">
                        by <img className="mini-logo" src="/assets/img/logo.white.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default List;