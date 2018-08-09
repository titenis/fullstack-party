import _ from 'lodash';
import React from 'react';
import {Link} from 'react-router';
import classnames from 'classnames';
import FromNow from '../../Common/components/FromNow';
import Comment from './Comment';

const Issue = ({issue, comments}) => {
    let badgeClass = classnames({
        'badge': true,
        'badge-open': issue.state === 'open',
        'badge-closed': issue.state !== 'open', //TODO: missing css
    });

    return (
        <div className="issue-inner min-h-100-minus-navbar">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Link to="/list" className="back">Back to Issues</Link>

                        <ul className="issue-content cards">
                            <li className="card">
                                <div className="card-body">
                                    <h1 className="issue">
                                        {issue.title} <span className="light-gray">#{issue.number}</span>
                                    </h1>

                                    <div className="issue-info">

                                        <div className={badgeClass}>{issue.state}</div>
                                        <a href="#" className="author">{issue.user ? issue.user.login : ''}</a> opened
                                        this issue <FromNow timestamp={issue.created_at}/> · {issue.comments} comment
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