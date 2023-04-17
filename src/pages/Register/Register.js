import React from 'react';
import classNames from "classnames/bind";

import styles from "./Register.module.scss";

const cx = classNames.bind(styles);
function Register(props) {
    return (
        <div className={cx('wrapper')}>
            <h3>Register page</h3>
        </div>
    );
}

export default Register;