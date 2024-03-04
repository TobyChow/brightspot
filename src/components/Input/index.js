import styles from './Input.module.css';

export default function Input({ onChange, value, placeholder, ...props }) {
    return (
        <input
            className={styles.input}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e)}
            {...props}
        />
    );
}