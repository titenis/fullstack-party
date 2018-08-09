import React from 'react';

const Author = ({user}) => <a href={user.html_url} className="author" target="_blank">{user.login}</a>;

export default Author;