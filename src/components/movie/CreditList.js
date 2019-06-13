import React, { useState, useEffect, useRef } from 'react';
import CreditListItem from './CreditListItem';

const CreditList = ({ list }) => {
    const [isOpen, setIsOpen] = useState(false);
    const listRef = useRef(null);

    let maxHeight = 0;

    useEffect(() => {
        if (maxHeight === 0) {
            maxHeight = listRef.current.scrollHeight;
        }
        if (isOpen) {
            listRef.current.style.maxHeight = `${maxHeight}px`;
        } else {
            listRef.current.style.maxHeight = '512px';
        }
    }, [isOpen]);
    
    return (
        <div>
            <ul className="moviepage__credit-list" ref={listRef}>
                {
                    list.map((details, index) => (
                        <CreditListItem {...details} key={details.id + index} even={index % 2 === 0} />
                    ))
                }
            </ul>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="credit-list__open-btn"
            >
                {isOpen ? 'Less' : 'More'}
            </button>
        </div>
    )
}

export default CreditList;