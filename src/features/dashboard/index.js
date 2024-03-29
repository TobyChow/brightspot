import { Outlet } from "react-router-dom";
import Profile from '../profile';
import Navigation from '../navigation';
import styles from './Dashboard.module.css';

export const profile = {
    'username': 'Toby Chow',
    'email': 'toby_chow@hotmail.com',
    'picture': '/icons/sammy.webp'
}

export default function Dashboard() {
    return (
        <div className={styles.dashboardContainer}>
            <header>
                <Profile {...profile}/>
            </header>
            <nav className={styles.navbar}>
                <Navigation/>
            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    );
}
