import React from 'react';
import classnames from 'classnames';

const Filter = ({filter, counts, stateHandler}) => {
    const openBtnClass = classnames({
        'btn btn-link open d-inline-block mr-3': true,
        'active': filter.state === 'open'
    });

    const closedBtnClass = classnames({
        'btn btn-link closed d-inline-block': true,
        'active': filter.state === 'closed'
    });

    return (
        <div className="filter text-center">
            <button className={openBtnClass} onClick={() => stateHandler('open')}>{formatNumber(counts.open)} Open
            </button>
            <button className={closedBtnClass} onClick={() => stateHandler('closed')}>{formatNumber(counts.closed)}
                Closed
            </button>
        </div>
    );
};

const formatNumber = (number) => number.toLocaleString('de-DE');

export default Filter;