import {forwardRef, ReactNode} from 'react';
import cn from 'clsx';
import s from './Button.module.scss';

interface Props {
    type: 'button' | 'submit'
    classNames: string,
    children?: ReactNode
    onClick?: () => void
}

const Button = forwardRef<HTMLButtonElement | null, Props>(({ classNames, children, ...props }, ref) => {
    return (
        <button ref={ref} {...props} className={cn(s.button, classNames)}>
            {children}
        </button>
    );
});

export default Button;
