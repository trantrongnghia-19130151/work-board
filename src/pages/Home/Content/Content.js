import React from 'react';
import classNames from "classnames/bind";
import styles from "./Content.module.scss";
const cx = classNames.bind(styles);
function Content(props) {
    return (
        <div className={cx('wrapper')}>
            <h3>Content</h3>
        </div>
    );
}

export default Content;