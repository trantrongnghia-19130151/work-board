import React, {useState} from 'react';
import classNames from "classnames/bind";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Link} from "react-router-dom";


import styles from "./Content.module.scss";
import hinh7mau from "./hinh7mau.jpg";
import {BiUser} from 'react-icons/bi'
import config from "~/config";

const cx = classNames.bind(styles);

function Content(props) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('board-box')}>
                <h3 className={cx('header')}><BiUser/>
                    Your boards
                </h3>
                <Container>
                    <Row>
                        <Col lg={3} md={3}>
                            <Link to={config.routes.createWorkspace}>
                                <div className={cx('board-item')}>
                                    <img src={hinh7mau} alt=""/>
                                    <p className={cx('text')}>Test</p>
                                </div>
                            </Link>
                        </Col>
                        <Col lg={3} md={3}>
                            <Link to={config.routes.createWorkspace}>
                                <div className={cx('create-board')}>
                                    <p className={cx('create-text')}>Create new Board</p>
                                </div>
                            </Link>
                        </Col>
                    </Row>

                </Container>
            </div>
        </div>
    )
}


export default Content;