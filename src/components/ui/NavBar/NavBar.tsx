import Logo from "../../../assets/logo.svg"
import Cart from "../../../assets/cart.svg"
import styles from "./NavBar.module.css"
import { useState } from "react"
import CartModal from "../CartModal/CartModal"
import useCartContext from "../../../hooks/useCartContext"
import { useLocation, useNavigate } from "react-router-dom"


const NavBar = () => {

    const [showCartModal, setShowCartModal] = useState(false)

    // const { state: { cartItems } } = useCartContext()

    const navigate = useNavigate()

    const location = useLocation()

    const handleShowCartModal = () => {
        setShowCartModal(!showCartModal)
    }

    const handleNavigateToHome = () => {
        navigate("/")
    }

    return (
        <div className={styles.navbarContainer}>
            <div onClick={handleNavigateToHome} className={styles.navbarDetail}>
                <img src={Logo} alt="Logo de ecommerce" width={50} height={50} />
                <div>
                    <span>DH Ecommerce</span>
                </div>
            </div>
            {
                location.pathname !== "/checkout" &&
                <>
                    <div className={styles.navbarCartContainer}>
                        {/* {cartItems.length > 0 &&
                            <p className={styles.navbarTextAmount}>{cartItems.length}</p>
                        } */}
                        <img src={Cart} alt="cart icon" onClick={handleShowCartModal} />
                    </div>
                    {
                        showCartModal && (<CartModal handleShowCartModal={handleShowCartModal} />)
                    }
                </>

            }

        </div>
    )
}

export default NavBar