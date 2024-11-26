import styles from "./ToggleSwitch.module.css"

export const ToggleSwitch = () => {
    return (
        <>
            <input type="checkbox" name="toggle" id="toggle" className={styles.toggle} />
            <label htmlFor="toggle" className={styles.toggleButton}></label>
        </>
    )
}
