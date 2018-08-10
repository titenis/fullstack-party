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
            <button className={openBtnClass} onClick={() => stateHandler('open')}>
                <i className={"icon-ico-open"}/>{formatNumber(counts.open)} Open
            </button>
            <button className={closedBtnClass} onClick={() => stateHandler('closed')}>
                <i className={"icon-ico-closed"}/>{formatNumber(counts.closed)} Closed
            </button>
        </div>
    );
};

const formatNumber = (number) => number.toLocaleString('de-DE');

export default Filter;