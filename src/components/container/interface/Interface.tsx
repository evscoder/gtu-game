import Button from "../../ui/button/Button";
import s from './Interface.module.scss';
import Friends from "../friends/Friends";
import {FC} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../redux/store";
import cn from "clsx";
import {showRating} from "../../../redux/slices/ratingSlice";

interface Props {
    onNextLevel: () => void;
}

const Interface: FC<Props> = ({onNextLevel}) => {
    const { nextStatus } = useSelector((state: RootState) => state.gameMapSlice);
    const dispatch = useDispatch<AppDispatch>();

    const onShowRating = (): void => {
        dispatch(showRating(true));
    };

    return (
        <div className={s.interface}>
            <Friends />
            <Button type={'button'} classNames={s.btnChat} />
            <Button type={'button'} classNames={cn(s.btnNextLevel, nextStatus && s.isActive)} onClick={onNextLevel} />
            <Button type={'button'} classNames={s.btnEmail} />
            <Button type={'button'} classNames={s.btnRating} onClick={onShowRating} />
        </div>
    );
};

export default Interface;
