import React, {useState} from 'react';
import classNames from "classnames/bind";
import {Container, Draggable} from "react-smooth-dnd";
import {Button, Col, Container as Wrapper, Row} from 'react-bootstrap'
import Form from 'react-bootstrap/Form';


import styles from './WorkBoard.module.scss'
import Card from "~/pages/WorkBoard/Card";
import Column from "~/pages/WorkBoard/Column";
import {applyDrag, generateItems} from "~/untils/DragDrop";

const cx = classNames.bind(styles);

function WorkBoard(props) {
    const [columns, setColumns] = useState({
        columns: [
            {
                id: 'column-1', name: 'Column 1',
                children: [
                    {id: 'card-1-1', data: 'Card 1-1'},
                    {id: 'card-1-2', data: 'Card 1-2'}
                ]
            },
            {
                id: 'column-2', name: 'Column 2',
                children: [
                    {id: 'card-2-1', data: 'Card 2-1'},
                    {id: 'card-2-2', data: 'Card 2-2'},
                    {id: 'card-2-3', data: 'Card 2-3'}
                ]
            },
            {
                id: 'column-3', name: 'Column 3',
                children: [
                    {id: 'card-3-1', data: 'Card 3-1'},
                    {id: 'card-3-2', data: 'Card 3-2'},
                    {id: 'card-3-3', data: 'Card 3-3'}
                ]
            }
        ]
    });

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
                    {columns.columns.map(column => (
                        <Draggable key={column.id}>
                            <Column data={column} onCardDrop={onCardDrop} getCardPayload={getCardPayload}/>
                        </Draggable>
                    ))}
                </Container>
            </div>
        </div>
    );
}

export default WorkBoard;