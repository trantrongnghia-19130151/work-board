import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {Button, Image, OverlayTrigger, Tooltip} from "react-bootstrap";
import classNames from "classnames/bind";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


import styles from "./Header.module.scss";
import logo from "~/assets/header/logo-lion.png";
import {VscBell, VscColorMode, VscQuestion} from "react-icons/vsc";

const cx = classNames.bind(styles);

function NavScrollExample() {
    return (
        <Navbar className={cx('wrapper')} bg="light" expand="lg">
            <Container>
                    <Navbar.Brand
                        href="#"
                        className="navbar-brand-small"
                        style={{width: "15%"}}
                    >
                        <img
                            src={'https://a.trellocdn.com/prgb/assets/d947df93bc055849898e.gif'}
                            alt="logo"
                            height={20}
                            className="d-inline-block align-content-center justify-content-center logo "
                        />
                    </Navbar.Brand>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{maxHeight: "100px"}}
                            navbarScroll
                        >
                            <NavDropdown
                                className={cx('nav-item')}
                                title="Các Không gian làm việc"
                                id="navbarScrollingDropdown"
                            >
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Gần đây" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Đã đánh dấu sao" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Mẫu" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Button size="lg" type="submit">
                                Tạo mới
                            </Button>{" "}
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                size="lg"
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                        </Form>

                        <VscBell size={25}/>
                        <VscQuestion size={25}/>
                        <VscColorMode size={25}/>
                        <Tooltip id="tooltip-top" placement="top" className="tooltip-top">
                            <span>Đổi chế độ nền</span>
                        </Tooltip>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;
