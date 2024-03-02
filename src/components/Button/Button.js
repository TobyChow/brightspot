import styles from './Button.module.css';
import classNames from 'classnames';

export default function Button({ text, onClick, customStyle }) {
    return (
        <button className={classNames(styles.button, customStyle)} onClick={onClick}>
            {text}
        </button>
      );
}