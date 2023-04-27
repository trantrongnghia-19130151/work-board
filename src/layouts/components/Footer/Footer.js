import React from 'react';
import classNames from "classnames/bind";
import { Container, Row, Col } from 'react-bootstrap';
import { FaGem, FaHome, FaEnvelope, FaPhoneAlt, FaPrint } from 'react-icons/fa';


import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer(props) {
    return (
        <div className={cx('wrapper')}>
            <div className='text-center text-lg-start text-muted'>

                <section className=''>
                    <Container className='text-center text-md-start mt-5'>
                        <Row className='mt-3'>
                            <Col md='3' lg='4' xl='3' className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>
                                    <FaGem size={20}/>
                                    Company name
                                </h6>
                                <p>
                                    Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
                                    amet, consectetur adipisicing elit.
                                </p>
                            </Col>

                            <Col md='2' lg='2' xl='2' className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Angular
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        React
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Vue
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Laravel
                                    </a>
                                </p>
                            </Col>

                            <Col md='3' lg='2' xl='2' className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Pricing
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Settings
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Oders
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Help
                                    </a>
                                </p>
                            </Col>

                            <Col md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                                <p>
                                    <FaHome size={20}/>
                                    New York, NY 10012, US
                                </p>
                                <p>
                                    <FaEnvelope size={20}/>
                                    info@example.com
                                </p>
                                <p>
                                    <FaPhoneAlt size={20}/> + 01 234 567 88
                                </p>
                                <p>
                                    <FaPrint size={20}/> + 01 234 567 89
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </section>

            </div>
        </div>
    );
}

export default Footer;
