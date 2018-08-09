import React from 'react';
import moment from 'moment';

const FromNow = (timestamp) => moment(timestamp).fromNow();

export default FromNow;