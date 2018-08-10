import _ from 'lodash';
import React from 'react';
import {Link} from 'react-router';
import classnames from 'classnames';
import Comment from './Comment';
import Author from '../../Common/components/Author';
import Moment from 'react-moment';

const Issue = ({issue, comments}) => {
    let badgeClass = classnames({
        'badge': true,
        'badge-open': issue.state === 'open',
        'badge-closed': issue.state !== 'open',
    });

    if (Object.keys(issue).length === 0) {
        return null;
    }

    return (
        <div className="issue-inner min-h-100-minus-navbar">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Link to="/list" className="back"><i className="icon-ico-back"/>Back to Issues</Link>

                        <ul className="issue-content cards">
                            <li className="card">
                                <div className="card-body">
                                    <h1 className="issue">
                                        {issue.title} <span className="light-gray">#{issue.number}</span>
                                    </h1>

                                    <div className="issue-info">
                                        <div className={badgeClass}>
                                            <i className={issue.state === 'open' ? "icon-ico-open" : "icon-ico-closed"}/>{issue.state}
                                        </div>
                                        <Author user={issue.user}/> opened this issue <Moment
                                        fromNow>{issue.created_at}</Moment> · {issue.comments} comment
                                    </div>
                                </div>
                            </li>
                        </ul>

                        <ul className="issue-comments cards">
                            {_.map(comments, (singleComment) => (
                                <Comment comment={singleComment} key={singleComment.id}/>))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Issue;