import React, {useEffect, useState} from 'react';
import classNames from "classnames/bind";
import {Container, Draggable} from "react-smooth-dnd";
import {Button, Col, Container as Wrapper, Row} from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


import styles from './WorkBoard.module.scss'
import Card from "~/pages/WorkBoard/Card";
import Column from "~/pages/WorkBoard/Column";
import {applyDrag, generateItems} from "~/untils/DragDrop";
import {AiOutlinePlus} from 'react-icons/ai'
import {RiDeleteBack2Fill} from 'react-icons/ri'
import {createColumn, getAllMemberWorkspace, getWorkspaceById} from "~/services/workspaces.sevices";

const cx = classNames.bind(styles);

function WorkBoard(props) {
    const [isOpen, setIsOpen] = useState(false)
    const [columns, setColumns] = useState([])
    const [columnTitle, setColumnTitle] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const handleChangeOpen = () => {
        setIsOpen(true)
    }
    const handleChangeColumnTitle = (e) => {
        setColumnTitle(e.target.value)
    }
    useEffect(() => {
        setIsLoading(false)
        async function fetchData() {
            const response = await getWorkspaceById(1);
            const data = response?.data;
            setColumns(data.columns)
        }
        fetchData();
    }, [isLoading]);
    const handleAddColumns = async () => {
        const body = {
            workspaceId: 1,
            columnName: columnTitle
        }
        const response = await createColumn(body)
        if (response.status === 200) {
            setIsLoading(true)
            setIsOpen(false)
        } else {
            setIsLoading(false)
        }
    }


    function getCardPayload(columnId, index) {
        return columns.columns.filter(p => p.id === columnId)[0].children[index];
    }

    function onColumnDrop(dropResult) {
        const newScene = Object.assign({}, columns);
        newScene.columns = applyDrag(newScene.columns, dropResult);
        setColumns(newScene);
    }

    function onCardDrop(columnId, dropResult) {
        if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
            const newScene = Object.assign({}, columns);
            const column = newScene.columns.filter(p => p.id === columnId)[0];
            const columnIndex = newScene.columns.indexOf(column);

            const newColumn = Object.assign({}, column);
            newColumn.children = applyDrag(newColumn.children, dropResult);
            newScene.columns.splice(columnIndex, 1, newColumn);

            setColumns(newScene);
        }
    }

    return (

        <div className={cx('wrapper')}>
            <div className="card-scene">
                <Container
                    orientation="horizontal"
                    onDrop={onColumnDrop}
                    dragHandleSelector=".column-drag-handle"
                    dropPlaceholder={{
                        animationDuration: 150,
                        showOnTop: true,
                        className: 'cards-drop-preview'
                    }}
                >
                    {columns?.map(column => (
                        <Draggable key={column.id}>
                            <Column data={column} onCardDrop={onCardDrop} getCardPayload={getCardPayload}/>
                        </Draggable>
                    ))}
                    {
                        !isOpen && (
                            <div onClick={handleChangeOpen} className={cx('create-column')}>
                                <AiOutlinePlus/>
                                <span>Thêm cột</span>
                            </div>
                        )
                    }
                    {
                        isOpen && (
                            <div className={cx('add-column')}>
                                <div className={cx('input')}>
                                    <Form.Control
                                        value={columnTitle}
                                        onChange={handleChangeColumnTitle}
                                        size='lg'
                                        className={cx('input-add')}
                                        placeholder="Nhập tiêu đề"
                                    />
                                </div>
                                <div className={cx('function')}>
                                    <Button onClick={() => handleAddColumns()} size="lg" variant="primary">Thêm</Button>
                                    <RiDeleteBack2Fill onClick={() => setIsOpen(false)} className={cx('icon-remove')}/>
                                </div>
                            </div>
                        )
                    }
                </Container>
            </div>
        </div>
    );
}

export default WorkBoard;