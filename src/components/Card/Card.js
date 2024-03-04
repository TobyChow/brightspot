import styles from './Card.module.css';
import classNames from 'classnames';

export default function Card({ children, moduleStyle }) {
    return (
        <div className={classNames(styles.card, moduleStyle)}>
            {children}
        </div>
    )
}