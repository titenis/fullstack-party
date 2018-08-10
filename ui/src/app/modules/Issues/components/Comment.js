import React from 'react';
import Author from '../../Common/components/Author';
import Moment from 'react-moment';

const Comment = ({comment}) => (
    <li className="card">
        <div className="card-body">
            <div className="comment-info">
                <img className="author-thumb" src={comment.user.avatar_url} alt=""/>
                <div className="arrow-left"/>
                <Author user={comment.user}/> commented <Moment fromNow>{comment.created_at}</Moment>
            </div>

            <div className="comment">
                {comment.body}
            </div>
        </div>
    </li>
);

export default Comment;