import React, {useState} from 'react';
import classNames from "classnames/bind";
import {Container, Draggable} from "react-smooth-dnd";
import Form from "react-bootstrap/Form";

import styles from "./Column.module.scss";
import Card from "~/pages/WorkBoard/Card";
import {Button} from "react-bootstrap";
import {RiDeleteBack2Fill} from "react-icons/ri";
import {AiOutlinePlus} from "react-icons/ai";

const cx = classNames.bind(styles);

function Column(props) {
    const {data, getCardPayload, onCardDrop} = props
    const [isOpen, setIsOpen] = useState(false)
    const handleChangeOpen = () => {
        setIsOpen(true)
    }

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
                {data.cards.map(card => (
                    <Draggable key={card.id}>
                        <Card card={card}/>
                    </Draggable>
                ))}
                {
                    !isOpen && (
                        <div onClick={handleChangeOpen} className={cx('create-column')}>
                            <AiOutlinePlus/>
                            <span>Thêm card</span>
                        </div>
                    )
                }
                {
                    isOpen && (
                        <div className={cx('add-column')}>
                            <div className={cx('input')}>
                                <Form.Control
                                    size='lg'
                                    className={cx('input-add')}
                                    placeholder="Nhập tiêu đề"
                                />
                            </div>
                            <div className={cx('function')}>
                                <Button  size="lg" variant="primary">Thêm</Button>
                                <RiDeleteBack2Fill onClick={() => setIsOpen(false)} className={cx('icon-remove')}/>
                            </div>
                        </div>
                    )
                }
            </Container>
        </div>
    );
}

export default Column;