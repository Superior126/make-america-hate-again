import styles from "./styles.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.header_text}>
                <h1>Make America Hate Again</h1>
                <p>A collection of things Republicans are doing to destroy America.</p>
            </div>
        </header>
    )
}