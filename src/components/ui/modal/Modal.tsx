import s from './Modal.module.scss';
import {FC, ReactNode} from "react";
import cn from 'clsx';
import imgTitle from '/img/rating-title.png';

interface Props {
    classNames: string,
    children: ReactNode;
    title: string,
    isShow: boolean,
    closeModal: () => any
}

const Modal: FC<Props> = ({ classNames, children, title, isShow, closeModal }) => {
    return (
        <div className={cn(s.modal, classNames, isShow && s.active)}>
            <div className={s.modal__backdrop} onClick={closeModal}></div>
            <div className={s.modal__dialog}>
                <div className={s.modal__content}>
                    <button className={s.modal__close} onClick={closeModal}></button>
                    <div className={s.modal__header}>
                        <h2 className={s.modal__titleInvisible}>{title}</h2>
                        <img className={s.modal__bgTitle} src={imgTitle} alt={'#'}/>
                    </div>
                    { children }
                </div>
            </div>
        </div>
    );
};

export default Modal;
