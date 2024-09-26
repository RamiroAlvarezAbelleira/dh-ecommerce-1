import Logo from "../../../assets/logo.svg"
import Cart from "../../../assets/cart.svg"
import styles from "./NavBar.module.css"


const NavBar = () => {
    return (
        <div className={styles.navbarContainer}>
            <div className={styles.navbarDetail}>
                <img src={Logo} alt="Logo de ecommerce" width={50} height={50} />
                <div>
                    <span>DH Ecommerce</span>
                </div>
            </div>
            <div className={styles.navbarCartContainer}>
                <p className={styles.navbarTextAmount}>2</p>
                <img src={Cart} alt="cart icon" />
            </div>
        </div>
    )
}

export default NavBar