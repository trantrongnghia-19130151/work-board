import React from 'react';
import classNames from "classnames/bind";
import {Button} from "react-bootstrap";

import styles from './Home.module.scss'

const cx = classNames.bind(styles);

function Home(props) {
    return (
        <div className={cx('wrapper')}>
            <h3 className='blue'>Home Page</h3>

        </div>
    );
}

export default Home;