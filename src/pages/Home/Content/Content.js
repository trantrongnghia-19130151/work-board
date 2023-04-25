import React from 'react';
import classNames from "classnames/bind";
import styles from "./Content.module.scss";
import { FaPlus } from 'react-icons/fa';
const cx = classNames.bind(styles);
function Content(props) {
    return (
        <div className={cx('wrapper')}>
            <h3 className={cx(styles.heading)}></h3>
            <img src="trello.jpg" alt=""/>
            <p>
                <span className={cx(styles.styledText)}>Theo dõi và cập nhật</span>
                <br/>
                <span className={cx(styles.defaultText)}>Mời mọi người vào bảng và thẻ, để lại nhận xét,
                    <br />thêm ngày hết hạn và chúng tôi sẽ hiển thị hoạt động quan trọng nhất ở đây.</span>
            </p>
            <div className={cx(styles.buttonContainer)}>
                <p>Liên kết</p>
                <button className={cx(styles.button)}><FaPlus /> Tạo bảng</button>
            </div>
        </div>
    );
}

export default Content;