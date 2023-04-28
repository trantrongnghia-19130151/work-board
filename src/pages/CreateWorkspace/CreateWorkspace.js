import React from 'react';
import classNames from "classnames/bind";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import styles from "./CreateWorkspace.module.scss";

const cx = classNames.bind(styles);

function CreateWorkspace(props) {
    return (
        <div className={cx('wrapper')}>
            <Container>
                <Row>
                    <Col md="auto" xs={12} lg={6}>
                        <Form>
                            <Form.Label className={cx('header')}>Let's build a Workspace</Form.Label>
                            <Col lg={10}>
                                <p className={cx('title')}>Boost your productivity by making it easier for everyone to
                                    access boards in one location.</p>
                            </Col>
                            <Col lg={10} className={cx('item')}>
                                <Form.Group className="mb-3" controlId="nameWorkspace">
                                    <Form.Label className={cx('label')}>Workspace Name</Form.Label>
                                    <Form.Control className={cx('input')} placeholder="Taco's Co" spellCheck={false}
                                                  size={"lg"} rows={3}/>
                                    <Form.Text id="passwordHelpBlock" muted>
                                        Your password must be 8-20 characters long, contain letters and numbers,
                                    </Form.Text>
                                </Form.Group>
                            </Col>

                            <Col lg={10} className={cx('item')}>
                                <Form.Label className={cx('label')}>Workspace Type</Form.Label>
                                <Form.Select size={"lg"} aria-label="Default select example">
                                    <option>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Col>
                            <Col lg={10} className={cx('item')}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label className={cx('label')}>Workspace description</Form.Label>
                                    <Form.Control style={{height: "200px"}} as="textarea" rows={3}/>
                                    <Form.Text id="passwordHelpBlock" muted>
                                        Your password must be 8-20 characters long, contain letters and numbers,
                                    </Form.Text>
                                </Form.Group>
                            </Col>
                            <Col lg={10}>
                                <div className="d-grid gap-2">
                                    <Button className={cx('btn-continue')} variant="primary" size="lg">
                                        Continue
                                    </Button>

                                </div>
                            </Col>
                        </Form>

                    </Col>
                    <Col className="d-flex align-items-center justify-content-center"
                         style={{backgroundImage: 'url("https://a.trellocdn.com/prgb/assets/df0d81969c6394b61c0d.svg")'}}
                         md="auto" lg={6}>
                        <div className={'image'}>
                            <img className={cx('image')}
                                 src="https://a.trellocdn.com/prgb/assets/d1f066971350650d3346.svg" alt="image"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default CreateWorkspace;