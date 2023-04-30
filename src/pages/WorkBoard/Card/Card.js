import React, {useState} from 'react';
import classNames from "classnames/bind";
import {Dropdown, Image} from "react-bootstrap";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import avatar from '~/assets/avatar/avatar.jpg'
import {AiFillEdit} from 'react-icons/ai'



import styles from "./Card.module.scss";


const cx = classNames.bind(styles);

function Card(props) {
    const {card} = props
    // console.log(card)
    const [tooltipIndex, setTooltipIndex] = useState(-1);

    const handleMemberTooltip = (index) => {
        setTooltipIndex(index);
    };

    const renderMemberTooltip = (member) => {
        return (
            <Tooltip id={`tooltip-${member.id}`}>
                <div>{`${member.firstName} ${member.lastName}`}</div>
            </Tooltip>
        );
    };

    return (
        <div className="card" {...card.props}>
            <div className={cx('card-content')}>
                <p>{card.name}</p>
                <span><AiFillEdit className={cx('edit')}/></span>
            </div>
            <div className={cx('user')}>
                {card?.cardMembers.map((member, index) => (
                    <OverlayTrigger
                        key={member.id}
                        overlay={renderMemberTooltip(member)}
                        placement="bottom"
                    >
                        <Image
                            className={cx('avatar')}
                            src={avatar}
                            roundedCircle
                        />
                    </OverlayTrigger>
                ))}
            </div>
        </div>
    );
}

export default Card;