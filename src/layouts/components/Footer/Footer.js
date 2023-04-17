import React from 'react';
import classNames from "classnames/bind";

import styles from './Footer.module.scss'

const cx = classNames.bind(styles);

function Footer(props) {
    return (
        <div className={cx('wrapper')}>
            <h3>Footer</h3>
        </div>
    );
}

export default Footer;