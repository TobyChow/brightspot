import Profile from '../profile/Profile.js';
import Weather from '../weather/Weather.js';
import Todo from '../todo/Todo.js';
import Navigation from '../navigation/Navigation.js';
import styles from './Dashboard.module.css';

const profile = {
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
                <Weather/>
                <Todo/>
            </main>
        </div>
    );
}
