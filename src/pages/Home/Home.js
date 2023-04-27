import React, {useEffect, useState} from 'react';
import classNames from "classnames/bind";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import styles from "./Home.module.scss";
import Sidebar from '~/pages/Home/Sidebar';
import Content from '~/pages/Home/Content';
import {getAllMemberWorkspace} from "~/services/workspaces.sevices";

const cx = classNames.bind(styles);

function Home(props) {
    const [wordBoards,setWordBoards] = useState([])
    useEffect(() => {
        async function fetchData() {
            const response = await getAllMemberWorkspace(1);
            const data = response?.data;
            console.log(data)

        }

        fetchData();
    }, []);
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
