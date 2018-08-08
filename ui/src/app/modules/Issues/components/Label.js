import React from 'react';
import classnames from 'classnames';

const Label = ({label}) => {
    let isWarning = label.name === 'RFC' || label.name === 'Deprecation';
    let isDanger = label.name === 'Bug';
    let isSecondary = !isWarning && !isDanger;

    let badgeClass = classnames({
        'badge': true,
        'badge-warning': isWarning,
        'badge-danger': isDanger,
        'badge-secondary': isSecondary
    });

    return (
        <span className={badgeClass}>{label.name}</span>
    )
};

export default Label;