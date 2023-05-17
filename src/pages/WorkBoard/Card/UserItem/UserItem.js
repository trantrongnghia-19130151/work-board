import Button from "react-bootstrap/Button";
import React from "react";
import classNames from "classnames/bind";

import styles from "~/pages/WorkBoard/Card/UserItem/UserItem.module.scss"

const cx = classNames.bind(styles);

function UserItem({data, handleAddMember}) {
    console.log(handleAddMember)
    return (
        <div>
            <div className={cx('container-item')}>
                <div className={cx('email-item')}>
                    {data.email}
                </div>
                <div className={cx('add-item')}>
                    <Button onClick={() => {
                        handleAddMember(data.email)
                    }} variant="primary" size="lg">
                        Thêm
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default UserItem