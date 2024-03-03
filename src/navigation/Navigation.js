import styles from './Navigation.module.css';
import classNames from 'classnames';

//todo component for nav items
export default function Navigation() {
    return (
        <div className={styles.navigationContainer}>
            <div className={classNames(styles.navItem, 'header-1')}>Weather</div>
            <div className={classNames(styles.navItem, 'header-1')}>Todo</div>
        </div>
    );
}