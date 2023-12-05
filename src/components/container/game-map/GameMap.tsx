import mapImg from '/img/map.png';
import s from './GameMap.module.scss';
import Interface from "../interface/Interface";
import {useEffect, useRef, useState} from "react";
import cn from "clsx";
import {useDispatch} from "react-redux";
import Rating from "../rating/Rating";
import {nextLevel} from "../../../redux/slices/gameMapSlice";

const maxLevel = 52;
const timeStep = 800;

const GameMap = () => {
    const dispatch = useDispatch();
    const [level, setLevel] = useState<number>(1);
    const [shapeIndex, setShapeIndex] = useState<number>(maxLevel);
    const [levels, setLevels] = useState<number[]>([]);
    const refShapes = useRef<HTMLDivElement>(null);
    const levelTimerID = useRef<any>(null);

    useEffect(() => {
        const arr = [];

        for (let i = 1; i < maxLevel; i++) {
            arr.push(i);
        }

        setLevels(arr);
    }, []);

    const onNextLevel = (): void => {
        if (level < maxLevel) {
            setLevel(v => v + 1);
        }

        clearInterval(levelTimerID.current);
        setShapeIndex(maxLevel);
        dispatch(nextLevel(true));
        setTimeout(() => {
            dispatch(nextLevel(false));
        }, timeStep);
    };

    const nextSteps = (index: number): void => {
        setLevel((v) => {
            if (v === index) {
                clearInterval(levelTimerID.current);
                return v;
            }

            return v + 1;
        });
    };

    const previousSteps = (index: number): void => {
        setLevel((v) => {
            if (v === index + 2) {
                clearInterval(levelTimerID.current);
            }

            return v - 1;
        });
    };

    const onClickShape = (event: any): void => {
        const target = event.target;

        if (target.tagName === 'BUTTON') {
            const index = [...target.parentNode.children].indexOf(target) + 1;

            clearInterval(levelTimerID.current);
            setShapeIndex(index);

            if (index > level) {
                nextSteps(index);
                levelTimerID.current = setInterval(() => nextSteps(index), timeStep);
            } else {
                previousSteps(index);
                levelTimerID.current = setInterval(() => previousSteps(index), timeStep);
            }
        }
    };

    return (
        <div className={s.map}>
            <div className={s.map__container}>
                <div className={s.map__cover}>
                    <img src={mapImg} alt="#" className={s.map__image} />
                    <div className={cn(s.map__obj, s[`map__obj--${level}`], shapeIndex < level && s['map__obj--back'])}></div>
                    <div ref={refShapes} className={s.map__shapes} onClick={onClickShape}>
                        {levels.map((_, index) => (
                            <button className={s.map__shape} type={'button'} key={`mapShape${index}`} />
                        ))}
                    </div>
                </div>
                <Interface onNextLevel={onNextLevel} />
            </div>
            <Rating />
        </div>
    );
};

export default GameMap;
