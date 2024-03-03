import styles from './Profile.module.css';

export default function Profile({ username, email, picture }) {
    return (
        <div className={styles.profileContainer}> 
            <div className="header-1">{username}</div>
            <div className={styles.separator}>|</div>
            <div>{email}</div>
            <img className={styles.avatar} src={picture} alt="Avatar"/>
        </div>
    )
}
