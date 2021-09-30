import { MouseEventHandler } from 'react';
import styles from './Button.module.scss';

interface IButtonProps{
    children?: React.ReactNode,
    onClick?: MouseEventHandler<HTMLButtonElement>,
}

export default function Button({ children, onClick }: IButtonProps){
    return (
    <button 
        className={styles.btn}
        onClick={onClick}>
        {children}
    </button>);
}