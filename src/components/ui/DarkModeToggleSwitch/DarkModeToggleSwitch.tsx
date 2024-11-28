import styles from "./DarkModeToggleSwitch.module.css"
import { FiMoon } from "react-icons/fi";
import { GoSun } from "react-icons/go";
import useThemeContext from "../../../hooks/useThemeContext";


interface Props {
    handleChange: () => void
}

export const DarkModeToggleSwitch = ({ handleChange }: Props) => {

    const { isDarkMode } = useThemeContext()
    return (
        <>
            <input type="checkbox" name="toggle" id="toggle" className={styles.toggle} onChange={handleChange} />
            <label htmlFor="toggle" className={styles.toggleButton}>
                {isDarkMode ?
                    <GoSun className={styles.sunIcon} />
                    :
                    <FiMoon className={styles.moonIcon} />
                }
            </label>
        </>
    )
}
