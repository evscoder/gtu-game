import s from './Friends.module.scss'
import cn from 'clsx';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../redux/store";
import {useEffect, useRef} from "react";
import {getFriends} from "../../../redux/slices/friendsSlice";

const Friends = () => {
    const {friends, fulfilled} = useSelector((state: RootState) => state.friendsSlice);
    const dispatch = useDispatch<AppDispatch>();
    const refContainer = useRef<HTMLDivElement>(null);
    const refList = useRef<HTMLUListElement>(null);
    const refItem = useRef<HTMLLIElement>(null);
    const listWidth = useRef<number>(0);
    const listOffset = useRef<number>(0);
    const offsetWidth = useRef<number>(0);

    useEffect(() => {
        dispatch(getFriends());

        if (fulfilled) {
            const container = refContainer.current as HTMLDivElement;
            const list = refList.current as HTMLUListElement;
            const element = refItem.current as HTMLLIElement;
            const styles = window.getComputedStyle(element);

            offsetWidth.current = element.offsetWidth + parseInt(styles.getPropertyValue('margin-right'), 10);
            listWidth.current = friends.length * offsetWidth.current - container.offsetWidth;
            list.style.transform = 'translate3d(0, 0, 0)';
        }
    }, [dispatch, fulfilled]);

    const onPrev = (): void => {
        if (listOffset.current > 0) {
            listOffset.current -= offsetWidth.current;
        }

        const list = refList.current as HTMLUListElement;

        list.style.transform = `translate3d(-${listOffset.current}px, 0, 0)`;
    };

    const onNext = (): void => {
        const list = refList.current as HTMLUListElement;

        listOffset.current += offsetWidth.current;

        if (listWidth.current > listOffset.current) {
            list.style.transform = `translate3d(-${listOffset.current}px, 0, 0)`;
        } else {
            listOffset.current = 0;
            list.style.transform = `translate3d(0, 0, 0)`;
        }
    };

    return (
        <div className={s.friends}>
            <div ref={refContainer} className={s.friends__container}>
                <ul ref={refList} className={s.friends__list}>
                    {friends.map((item, index) => (
                        <li ref={refItem} className={s.friends__item} key={`friendsItem${index}${Date.now()}`}>
                            {item.add &&
                                <button className={s.friends__add} type="button"></button>
                            }
                            {item.icon &&
                                <div className={s.friends__icon}></div>
                            }
                        </li>
                    ))}
                </ul>
            </div>
            <div className={s.friends__buttons}>
                <button className={cn(s.friends__arrow, s['friends__arrow--left'])} onClick={onPrev}></button>
                <button className={cn(s.friends__arrow, s['friends__arrow--right'])} onClick={onNext}></button>
            </div>
        </div>
    );
};

export default Friends;
