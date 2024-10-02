import styles from "./CartModal.module.css"
import close from "../../../assets/close.svg"
import { FC } from "react"
import useCartContext from "../../../hooks/useCartContext"
import { CartProduct } from "../../../interface"

interface Props {
    handleShowCartModal: () => void
}

const CartModal: FC<Props> = ({ handleShowCartModal }) => {

    const { state: { cartItems }, dispatch } = useCartContext()

    const removeFromCart = (item: CartProduct) => {
        dispatch({ type: "REMOVE_FROM_CART", payload: item })
    }

    const addToCart = (item: CartProduct) => {
        dispatch({ type: "ADD_TO_CART", payload: item })
    }
    return (
        <div className={styles.modalContainer}>
            <button className={styles.modalCloseButton} onClick={handleShowCartModal}>
                <img src={close} alt="Close modal icon" />
            </button>
            <table className={styles.modalTable}>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Delete</th>
                        <th>Quantity</th>
                        <th>Add</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartItems.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>
                                        <p>{item.name}</p>
                                    </td>
                                    <td>
                                        <button
                                            className={styles.modalButtonRemove}
                                            onClick={() => removeFromCart(item)}
                                        >
                                            -1
                                        </button>
                                    </td>
                                    <td>
                                        <p>{item.quantity}</p>
                                    </td>
                                    <td>
                                        <button
                                            className={styles.modalButtonAdd}
                                            onClick={() => addToCart(item)}
                                        >
                                            +1
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div className={styles.modalTotalContainer}>
                <h3>total</h3>
            </div>
            <div className={styles.modalButtonContainer}>
                <button>Checkout</button>
            </div>
        </div>
    )
}

export default CartModal