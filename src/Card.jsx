import React from 'react';
import './styles.css'
import './Card.css'

// This is the card wrapper
const Card = (props) => {
    let classes = `card ${props.className}`
    return (
        <div className={classes}>
            {props.children}
        </div>
    );
}

export default Card;
