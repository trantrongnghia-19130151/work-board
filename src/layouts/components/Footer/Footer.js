import React from 'react';
import classNames from "classnames/bind";

import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookSquare, FaTwitter, FaInstagram } from 'react-icons/fa';

import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer(props) {
    return (
        <div className={cx('wrapper')}>
            <footer className="bg-dark text-light">
                <Container className="py-5">
                    <Row>
                        <Col lg={6}>
                            <h3>Lion Home Service</h3>
                            <p className="text-secondary">Công ty của chúng tôi là một trong những công ty hàng đầu trong lĩnh vực của mình. Với đội ngũ nhân viên giàu kinh nghiệm và tâm huyết, chúng tôi cam kết mang đến cho khách hàng những sản phẩm và dịch vụ chất lượng nhất. </p>
                            <ul className="list-inline mt-4">
                                <li className="list-inline-item"><a href="#"><FaFacebookSquare /></a></li>
                                <li className="list-inline-item"><a href="#"><FaTwitter /></a></li>
                                <li className="list-inline-item"><a href="#"><FaInstagram /></a></li>
                            </ul>
                        </Col>
                        <Col lg={3} md={6} className="mt-4 mt-lg-0">
                            <h5>Links</h5>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-secondary">Lorem ipsum</a></li>
                                <li><a href="#" className="text-secondary">Dolor sit amet</a></li>
                                <li><a href="#" className="text-secondary">Consectetur</a></li>
                                <li><a href="#" className="text-secondary">Adipiscing elit</a></li>
                            </ul>
                        </Col>
                        <Col lg={3} md={6} className="mt-4 mt-lg-0">
                            <h5>Contact Us</h5>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-secondary">Khu phố 6, phường Linh Trung, TP Thủ Đức, TP HCM</a></li>

                                <li><a href="#" className="text-secondary">lion.team@gmail.com</a></li>
                                <li><a href="#" className="text-secondary">+1 (555) 555-5555</a></li>
                            </ul>
                        </Col>
                    </Row>
                    <hr className="my-5" />
                    <p className="text-secondary text-center">&copy; 2023 Lion Home Service. All rights reserved.</p>
                </Container>
            </footer>
        </div>
    );
}

export default Footer;
