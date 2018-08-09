import React from 'react';
import FromNow from '../../Common/components/FromNow';
import Author from '../../Common/components/Author';

const Comment = ({comment}) => (
    <li className="card">
        <div className="card-body">
            <div className="comment-info">
                <img className="author-thumb" src={comment.user.avatar_url} alt=""/>
                <div className="arrow-left"/>
                <Author user={comment.user}/> commented <FromNow timestamp={comment.created_at}/>
            </div>

            <div className="comment">
                {comment.body}
            </div>
        </div>
    </li>
);

export default Comment;