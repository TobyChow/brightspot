import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import classNames from 'classnames';

export default function Navigation() {
    return (
        <div className={styles.navigationContainer}>
            <NavLink to="/">
                <NavItem text='Home'/>
            </NavLink>
            <NavLink to="/weather">
                <NavItem text='Weather'/>
            </NavLink>
            <NavLink to="/todo">
                <NavItem text='Todo'/>
            </NavLink>
        </div>
    );
}

function NavItem({ text }) {
    return (
        <div className={classNames(styles.navItem, 'header-1')}>{text}</div>
    );
}