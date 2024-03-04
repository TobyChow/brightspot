import styles from './SearchBarList.module.css';

export default function SearchBarList({ locations, changeLocations }) {
    if (!locations.length)
        return (
            <ul className={styles.list}>
                <li className={styles.listItem}>No location found</li>
            </ul>
        );
    else
        return (
            <ul className={styles.list}>
                {locations.map(item => (
                    <li key={item.place_id} className={styles.listItem}>
                        <div onClick={(e) => {
                                e.preventDefault(); 
                                changeLocations(item);
                            }
                        }>
                            {item.display_name}
                        </div>
                    </li>
                ))}
            </ul>
        );
}