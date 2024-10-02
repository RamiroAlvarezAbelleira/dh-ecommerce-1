import styles from "./CartModal.module.css"
import close from "../../../assets/close.svg"
import { FC } from "react"

interface Props {
    handleShowCartModal: () => void
}

const CartModal: FC<Props> = ({handleShowCartModal}) => {
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
                    <tr>
                        <td>name</td>
                        <td>
                            <button className={styles.modalButtonRemove}>-1</button>
                        </td>
                        <td>
                            12
                        </td>
                        <td>
                            <button className={styles.modalButtonAdd}>+1</button>
                        </td>
                    </tr>
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