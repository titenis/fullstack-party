import _ from 'lodash';
import React from 'react';
import Label from './Label';
import {Link} from 'react-router';
import FromNow from '../../Common/components/FromNow';
import Author from '../../Common/components/Author';
import Pagination from '../../Pagination/containers/PaginationContainer'
import Filter from './Filter';

const List = ({issues, pagination, filter, counts, stateHandler}) => (
    <div className="container-fluid h-100-minus-navbar">
        <div className="row h-100">
            <div className="col list">
                <Filter filter={filter} counts={counts} stateHandler={stateHandler}/>
                <ul className="cards">
                    {_.map(issues, (issue) => (
                        <li className="card" key={issue.id}>
                            <div className="card-body">
                                <div className="issue">
                                    <Link to={`/issue/${issue.number}`}>{issue.title}</Link>
                                    {_.map(issue.labels, (label) => <Label label={label} key={label.id}/>)}
                                </div>

                                <Link to={`/issue/${issue.number}`} className={"comments"}>{issue.comments}</Link>

                                <div className="issue-info">
                                    #{issue.number} opened <FromNow timestamp={issue.created_at}/> by <Author
                                    user={issue.user}/>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>

                <Pagination/>
            </div>
            <div className="col list-bg h-100 text-center text-white">
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