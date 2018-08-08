import _ from 'lodash';
import React from 'react';
import moment from 'moment';
import {Link} from 'react-router';
import classnames from 'classnames';

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
                                        this issue {moment(issue.created_at).fromNow()} · {issue.comments} comment
                                    </div>
                                </div>
                            </li>
                        </ul>

                        <ul className="issue-comments cards">
                            {_.map(comments, (singleComment) => (
                                <li className="card" key={singleComment.id}>
                                    {console.log(singleComment)}
                                    <div className="card-body">
                                        <div className="comment-info">
                                            <img className="author-thumb" src={singleComment.user.avatar_url} alt=""/>
                                            <div className="arrow-left"/>
                                            <a href="#" className="author">{singleComment.user.login}</a>
                                            commented {moment(singleComment.created_at).fromNow()}
                                        </div>

                                        <div className="comment">
                                            {singleComment.body}
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Issue;