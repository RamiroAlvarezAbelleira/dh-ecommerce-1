import { useSelector } from "react-redux"
import styles from "./CartIcon.module.css"
import { IRootState } from "../../../store"
import Cart from "../../../assets/cart.svg"
import darkCart from "../../../assets/darkCart.svg"
import useThemeContext from "../../../hooks/useThemeContext"

interface CartIconProps {
    handleShowCartModal: () => void
}

const CartIcon = ({handleShowCartModal}: CartIconProps) => {

    const cartItems = useSelector((state: IRootState) => state.cartSlice.cartItems)

    const { isDarkMode } = useThemeContext()

    return (
        <div className={styles.navbarCartContainer} style={{backgroundColor: `${isDarkMode ? 'rgba(255, 255, 255, 0.125)' : 'rgba(160, 160, 160, 0.125)'}`}}>
            {cartItems.length > 0 &&
                <p className={styles.navbarTextAmount}>{cartItems.length}</p>
            }
            <img src={isDarkMode ? Cart : darkCart } alt="cart icon" onClick={handleShowCartModal} />
        </div>
    )
}

export default CartIcon