import { Outlet } from "react-router-dom"
import NavBar from "../ui/NavBar/NavBar"
import useThemeContext from "../../hooks/useThemeContext"
import styles from "./MainLayout.module.css"


const MainLayout = () => {
    const {isDarkMode} = useThemeContext()
    return (
        <div className={isDarkMode ? styles.darkMode : styles.lightMode}>
            <NavBar/>
            <Outlet/>
        </div>
    )
}

export default MainLayout