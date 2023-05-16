import React, {useState} from 'react';
import classNames from "classnames/bind";
import {Dropdown, Image} from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Tippy from '@tippyjs/react/headless';

import avatar from '~/assets/avatar/avatar.jpg'
import {AiFillEdit, AiOutlineUserAdd} from 'react-icons/ai'


import styles from "./Card.module.scss";
import Form from "react-bootstrap/Form";
import {addMemberToCard} from "~/services/workspaces.sevices";
import {toast} from "react-toastify";


const cx = classNames.bind(styles);

function Card(props) {
    const {card, loading} = props
    const [tooltipIndex, setTooltipIndex] = useState(-1);
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState(false)
    const [email, setEmail] = useState('')
    const [cardId, setCardId] = useState(null)
    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
        setOpen(false)
    }
    const handleChangeOpen = () => {
        setOpen(true)
    }

    const handleMemberTooltip = (index) => {
        setTooltipIndex(index);
    };
    const handleAddMember = async () => {
        const response = await addMemberToCard(card?.id, email).catch((error) => {
            if (error.response.status === 404) {
                toast.warning('Không có thành viên này!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                loading(false)
            }
        })
        if (response.status === 200) {
            toast.success('Thêm thành viên  thành công!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            loading(true)
            setShow(false)
        }


    }

    const renderMemberTooltip = (member) => {
        // setCardId(member.id)
        return (
            <Tooltip id={`tooltip-${member.id}`}>
                <div>{`${member.firstName} ${member.lastName}`}</div>
            </Tooltip>
        );
    };


    return (
        <div className="card" {...card.props}>
            <div className={cx('card-content')}>
                <p>{card.name + "///" + card.id}</p>
                <Tippy
                    interactive
                    onClickOutside={() => setOpen(false)}
                    placement="bottom-end"
                    visible={open}
                    popperOptions={{
                        strategy: "fixed",
                    }}
                    render={attrs => (
                        <div className={cx('box')} tabIndex="-1" {...attrs}>
                            <div className={cx('function')}>
                                   <div>
                                       title
                                   </div>
                                   <div className={cx('modal')}>
                                       <div className={cx('modal-left')}>
                                           <div className={cx('description')}>
                                               <div style={{fontWeight: 'bold'}}>Mô tả</div>
                                               <div className={cx('input')}>
                                                   <input placeholder={'Thêm mô tả chi tiết'}/>
                                               </div>

                                           </div>
                                           <div className={cx('modal-save')}>
                                               <Button variant="primary" size="lg">
                                                   Cập Nhật
                                               </Button>{' '}
                                           </div>
                                       </div>
                                       <div className={cx('modal-right')}>
                                           <div className={cx('add-to-card')}>
                                               <span className={cx('add-to-card-title')}>Thêm vào thẻ</span>
                                               <div onClick={handleShow} className={cx('add-user')}>
                                                   <AiOutlineUserAdd className={cx('add-user-icon')}/>
                                                   <span>Thành viên</span>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       )}
                >
                    <span onClick={handleChangeOpen} className={cx('box-edit')}>
                        <AiFillEdit className={cx('edit')}/>
                    </span>
                </Tippy>
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
            <Modal size='lg'
                   centered={true}
                   autoFocus={true}
                   show={show}
                   onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className={cx('title')}>Thêm thành viên</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control
                        size='lg'
                        value={email}
                        onChange={handleChangeEmail}
                        className={cx('input-add')}
                        placeholder="Nhập tiêu đề"
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary"
                            size='lg'
                            onClick={handleClose}>
                        Hủy
                    </Button>
                    <Button variant="primary"
                            size='lg'
                            onClick={() => handleAddMember()}>
                        Thêm thành viên
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>

    );
}

export default Card;