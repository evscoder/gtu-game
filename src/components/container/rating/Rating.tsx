import s from './Rating.module.scss';
import Modal from "../../ui/modal/Modal";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../redux/store";
import {useEffect} from "react";
import cn from "clsx";
import {closeRating, getRating} from "../../../redux/slices/ratingSlice";
const Rating = () => {
    const {rating, ratingShow} = useSelector((state: RootState) => state.ratingSlice);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getRating());
    }, [dispatch]);

    const onCloseRating = (): void => {
        dispatch(closeRating());
    };

    return (
        <Modal isShow={ratingShow} closeModal={onCloseRating} classNames={s.modalRating} title={'Рэйтинг игроков'}>
            <div className={s.rating}>
                <div className={s.rating__heading}>
                    <div className={s.rating__headingItem}>Место</div>
                    <div className={s.rating__headingItem}>Имя Фамилия</div>
                    <div className={s.rating__headingItem}>Опыт</div>
                </div>
                <div className={s.rating__content}>
                    {rating.map((item, index: number) => (
                        <div className={cn(s.rating__item, item.friend && s['rating__item--active'])} key={item.id}>
                            <div className={s.rating__itemColumn}>{index + 1}</div>
                            <div className={s.rating__itemColumn}>{item.name} {item.lastName}</div>
                            <div className={s.rating__itemColumn}>{item.points}</div>
                        </div>
                    ))}
                </div>
            </div>
        </Modal>
    );
};

export default Rating;
