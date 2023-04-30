import React, {useEffect, useState} from 'react';
import classNames from "classnames/bind";
import {Container, Draggable} from "react-smooth-dnd";
import Form from "react-bootstrap/Form";

import styles from "./Column.module.scss";
import Card from "~/pages/WorkBoard/Card";
import {Button} from "react-bootstrap";
import {RiDeleteBack2Fill} from "react-icons/ri";
import {AiOutlinePlus} from "react-icons/ai";
import {createCard} from "~/services/workspaces.sevices";

const cx = classNames.bind(styles);

function Column(props) {
    const {data, getCardPayload, onCardDrop, setNewColumnId, setCard,setIsLoading} = props
    const [isOpen, setIsOpen] = useState(false)
    const [cardTitle, setCardTitle] = useState('')
    const [error,setError] = useState('')
    const handleChangeCardTitle = (e) => {
        setCardTitle(e.target.value)
    }
    const handleChangeOpen = () => {
        setIsOpen(true)
    }
    useEffect(()=>{
        if(cardTitle.length > 0){
            setError('')
        }

    },[cardTitle])

    const handleCreateCard = async () => {
        if(!cardTitle){
            setError("card title không được để trống !!")
            return;
        }

        const body = {
            columnId: data.id,
            name: cardTitle
        }
        const response = await createCard(body)
        if(response.status === 200){
            setIsLoading(true)
            setIsOpen(false)
        }
        else{
            setIsLoading(false)
        }



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
                onDragEnd={e => setCard(e.payload)}
                onDrop={e => onCardDrop(data.id, e)}
                getChildPayload={index => getCardPayload(data.id, index)}
                dragClass="card-ghost"
                dropClass="card-ghost-drop"
                onDragEnter={() => {
                    setNewColumnId(data.id)
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
                        <div onClick={handleChangeOpen} className={cx('create-card')}>
                            <AiOutlinePlus/>
                            <span>Thêm card</span>
                        </div>
                    )
                }
                {
                    isOpen && (
                        <div className={cx('add-card')}>
                            <div className={cx('input')}>
                                <Form.Control
                                    size='lg'
                                    value={cardTitle}
                                    onChange={handleChangeCardTitle}
                                    className={cx('input-add')}
                                    placeholder="Nhập tiêu đề"
                                />
                                <Form.Text className={cx('error')}>
                                    {error}
                                </Form.Text>
                            </div>
                            <div className={cx('function')}>
                                <Button onClick={() => handleCreateCard()} size="lg" variant="primary">Thêm</Button>
                                <RiDeleteBack2Fill onClick={() => setIsOpen(false)}
                                                   className={cx('icon-remove')}/>
                            </div>
                        </div>
                    )
                }
            </Container>
        </div>
    );
}

export default Column;