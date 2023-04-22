import React from 'react';
import classNames from "classnames/bind";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import styles from "./Home.module.scss";
import Sidebar from '~/pages/Home/Sidebar'
import Content from '~/pages/Home/Content'

const cx = classNames.bind(styles);

function Home(props) {
    return (
        <div className={cx('wrapper')}>
            <Container>
                <Row>
                    <Col xs lg="2">
                        <Sidebar/>
                    </Col>
                    <Col xs lg="10">
                        <Content/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;