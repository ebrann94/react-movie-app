import React, { useState } from 'react';
import CreditListItem from './CreditListItem';

class CreditList extends React.Component {
    constructor(props) {
        super(props);

        this.listRef = React.createRef();
        this.maxHeight = 0;

        this.state = {
            isOpen: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {

    }
    
    componentDidUpdate() {
        if (this.maxHeight == 0) {
            this.maxHeight = this.listRef.current.scrollHeight;
        }

        if (this.state.isOpen) {
            this.listRef.current.style.maxHeight = `${this.maxHeight}px`;
        } else {
            this.listRef.current.style.maxHeight = '512px';
        }

    }

    handleClick() {
        this.setState(prevState => ({ isOpen: !prevState.isOpen }));
    }
    
    
    render() {
        return (
            <div>
                <ul className="moviepage__credit-list" ref={this.listRef}>
                    {
                        this.props.list.map((details, index) => (
                            <CreditListItem {...details} key={index} even={index % 2 == 0} />
                        ))
                    }
                </ul>
                <button 
                    onClick={() => this.setState(prevState => ({ isOpen: !prevState.isOpen }))}
                    className="credit-list__open-btn"
                >
                    {this.state.isOpen ? 'Less' : 'More'}
                </button>
            </div>
        )
    }
}

// const CreditList = ({ list }) => {
//     const [isOpen, setIsOpen] = useState(false); 
    
//     let classList = 'moviepage__credit-list';
//     if (isOpen) {
//         classList += ' open';
//     }
    
//     return (
//         <div>
//             <ul className={classList} ref={listRef}>
//                 {
//                     list.map((details, index) => (
//                         <CreditListItem {...details} key={details.id + index} even={index % 2 == 0} />
//                     ))
//                 }
//             </ul>

//             <button onClick={(e) => setIsOpen(!isOpen)}>{isOpen ? 'Less' : 'More'}</button>
//         </div>
//     )
// }

export default CreditList;