import React, {useState} from 'react';
import classNames from "classnames/bind";
import {Container, Draggable} from "react-smooth-dnd";

import styles from "./Column.module.css";
import Card from "~/pages/Home/Card";

const cx = classNames.bind(styles);

function Column(props) {
    const {data, getCardPayload, onCardDrop} = props

    return (
        <div className={cx('column')}>
            <header className='column-drag-handle'>
                {data.name}
            </header>
            <Container
                {...data.props}
                groupName="col"
                onDragStart={e => console.log("drag started", e)}
                onDragEnd={e => console.log("drag end", e)}
                onDrop={e => onCardDrop(data.id, e)}
                getChildPayload={index => getCardPayload(data.id, index)}
                dragClass="card-ghost"
                dropClass="card-ghost-drop"
                onDragEnter={() => {
                    console.log("drag enter:", data.id);
                }}
                onDragLeave={() => {
                    console.log("drag leave:", data.id);
                }}
                onDropReady={p => console.log('Drop ready: ', p)}
                dropPlaceholder={{
                    animationDuration: 150,
                    showOnTop: true,
                    className: 'drop-preview'
                }}
                dropPlaceholderAnimationDuration={200}
            >
                {data.children.map(card => (
                    <Draggable key={card.id}>
                        <Card card={card}/>
                    </Draggable>
                ))}
            </Container>
        </div>
    );
}

export default Column;