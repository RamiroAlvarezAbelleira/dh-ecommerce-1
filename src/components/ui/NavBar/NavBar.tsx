import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import Logo from "../../../assets/logo.svg"
import useThemeContext from "../../../hooks/useThemeContext"
import CartIcon from "../CartIcon/CartIcon"
import CartModal from "../CartModal/CartModal"
import { DarkModeToggleSwitch } from "../DarkModeToggleSwitch"
import styles from "./NavBar.module.css"


const NavBar = () => {

    const [showCartModal, setShowCartModal] = useState(false)

    const { setIsDarkMode } = useThemeContext()

    const navigate = useNavigate()

    const location = useLocation()

    const handleShowCartModal = () => {
        setShowCartModal(!showCartModal)
    }

    const handleNavigateToHome = () => {
        navigate("/")
    }

    const handleDarkMode = () => {
        setIsDarkMode(prev => !prev)
    }

    return (
        <div className={styles.navbarContainer}>
            <div onClick={handleNavigateToHome} className={styles.navbarDetail}>
                <img src={Logo} alt="Logo de ecommerce" width={50} height={50} />
                <div>
                    <span>DH Ecommerce</span>
                </div>
            </div>
            <div className={styles.cartAndDarkmodeContainer}>
                <DarkModeToggleSwitch handleChange={handleDarkMode}/>
                {
                    location.pathname !== "/checkout" &&
                    <>
                        <CartIcon handleShowCartModal={handleShowCartModal} />
                        {
                            showCartModal && (<CartModal handleShowCartModal={handleShowCartModal} />)
                        }
                    </>

                }
            </div>
        </div>
    )
}

export default NavBar