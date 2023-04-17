import React from 'react';
import classNames from "classnames/bind";

import styles from "./Login.module.scss";

const cx = classNames.bind(styles);

function Login(props) {
    return (
        <div className={cx('wrapper')}>
            <h3>Login page</h3>
        </div>
    );
}

export default Login;
