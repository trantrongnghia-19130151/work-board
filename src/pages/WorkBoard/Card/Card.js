import React, {useState} from 'react';
import classNames from "classnames/bind";


import styles from "./Card.module.css";


const cx = classNames.bind(styles);

function Card(props) {
    const {card} = props

    return (
        <div className="card" {...card.props}>
            <p>{card.data}</p>
        </div>
    );
}

export default Card;