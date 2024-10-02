import Logo from "../../../assets/logo.svg"
import Cart from "../../../assets/cart.svg"
import styles from "./NavBar.module.css"
import { useState } from "react"
import CartModal from "../CartModal/CartModal"
import useCartContext from "../../../hooks/useCartContext"


const NavBar = () => {

    const [showCartModal, setShowCartModal] = useState(false)

    const handleShowCartModal = () => {
        setShowCartModal(!showCartModal)
    }

    const { state: { cartItems } } = useCartContext()

    return (
        <div className={styles.navbarContainer}>
            <div className={styles.navbarDetail}>
                <img src={Logo} alt="Logo de ecommerce" width={50} height={50} />
                <div>
                    <span>DH Ecommerce</span>
                </div>
            </div>
            <div className={styles.navbarCartContainer}>
                {cartItems.length > 0 &&
                    <p className={styles.navbarTextAmount}>{cartItems.length}</p>
                }
                <img src={Cart} alt="cart icon" onClick={handleShowCartModal} />
            </div>
            {
                showCartModal && (<CartModal handleShowCartModal={handleShowCartModal} />)
            }
        </div>
    )
}

export default NavBar