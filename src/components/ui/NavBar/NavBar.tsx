import { useState } from "react"
import { useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import Cart from "../../../assets/cart.svg"
import Logo from "../../../assets/logo.svg"
import useThemeContext from "../../../hooks/useThemeContext"
import { IRootState } from "../../../store"
import CartModal from "../CartModal/CartModal"
import styles from "./NavBar.module.css"
import { ToggleSwitch } from "../ToggleSwitch"


const NavBar = () => {

    const [showCartModal, setShowCartModal] = useState(false)

    const { isDarkMode, setIsDarkMode } = useThemeContext()

    const cartItems = useSelector((state: IRootState) => state.cartSlice.cartItems)

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
                <ToggleSwitch/>
                <button onClick={handleDarkMode}>{isDarkMode ? "lightMode" : "darkMode"}</button>
                {
                    location.pathname !== "/checkout" &&
                    <>
                        <div className={styles.navbarCartContainer}>
                            {cartItems.length > 0 &&
                                <p className={styles.navbarTextAmount}>{cartItems.length}</p>
                            }
                            <img src={Cart} alt="cart icon" onClick={handleShowCartModal} />
                        </div>
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