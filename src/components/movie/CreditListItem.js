import React from 'react';

const CreditListItem = ({ name, role, id, even }) => {

    let classList = 'credit-list-item';

    if (even) {
        classList = classList + ' even';
    }

    return (
        <li className={classList}>
            <span className="credit-list-item__name">{name}</span> <span className="credit-list-item__role">{role}</span>
        </li>
    );
}

export default CreditListItem;