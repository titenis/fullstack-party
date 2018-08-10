import React from 'react';
import classnames from 'classnames';

const Pagination = ({pagination, handler}) => {

    let list = [];
    let dotsShowPrev = false;
    let dotsShowNext = false;
    for (let i = 1; i <= pagination.count; i++) {

        let showPrev = pagination.currentPage !== 1 && i === 1;
        let showNext = pagination.currentPage !== pagination.count && i === pagination.count;
        let btnClassName = classnames({
            'btn btn-link page-link': true,
            'active': i === pagination.currentPage
        });
        let prevNextClassName = classnames({
            'btn btn-link page-link': true,
            'prev': showPrev,
            'next': showNext
        });

        if (showPrev) {
            list.push(
                <li className="page-item" key={'prev'}>
                    <button className={prevNextClassName} onClick={() => handler.navPrev()}>Previous</button>
                </li>
            );
        }

        if ((i < 4 || i > pagination.count - 3) || (i > pagination.currentPage - 2 && i < pagination.currentPage + 2)) {
            list.push(
                <li className="page-item" key={i}>
                    <button className={btnClassName} onClick={() => handler.navToPage(i)}>{i}</button>
                </li>
            );
        } else if (dotsShowPrev === false && i < pagination.currentPage + 2) {
            list.push(<li className="page-item" key={'prev...'}><a className="page-link dots">...</a></li>);
            dotsShowPrev = true;

        } else if (dotsShowNext === false && i > pagination.currentPage - 2) {
            list.push(<li className="page-item" key={'next...'}><a className="page-link dots">...</a></li>);
            dotsShowNext = true;
        }


        if (showNext) {
            list.push(
                <li className="page-item" key={'next'}>
                    <button className={prevNextClassName} onClick={() => handler.navNext()}>Next</button>
                </li>
            );
        }
    }

    return (
        <nav>
            <ul className="pagination justify-content-center">
                {list}
            </ul>
        </nav>
    );
};

export default Pagination;