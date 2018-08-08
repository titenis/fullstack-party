import _ from 'lodash';
import React from 'react';
import Label from './Label';
import moment from 'moment';
import {Link} from 'react-router';

const List = ({issues}) => (
    <div className="container-fluid h-100-minus-navbar">
        <div className="row h-100">
            <div className="col list">
                <div className="filter text-center">
                    <a className="open d-inline-block mr-3 active" href="#">420 Open</a>
                    <a className="closed d-inline-block" href="#">6.969 Closed</a>
                </div>

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
                                    #{issue.number} opened {moment(issue.created_at).fromNow()} by <a href="#"
                                                                                                      className="author">{issue.user.login}</a>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>

                <nav>
                    <ul className="pagination justify-content-center">
                        <li className="page-item"><a className="page-link prev" href="#">Previous</a></li>
                        <li className="page-item"><a className="page-link active" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link dots" href="#">...</a></li>
                        <li className="page-item"><a className="page-link" href="#">9</a></li>
                        <li className="page-item"><a className="page-link" href="#">10</a></li>
                        <li className="page-item"><a className="page-link next" href="#">Next</a></li>
                    </ul>
                </nav>
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