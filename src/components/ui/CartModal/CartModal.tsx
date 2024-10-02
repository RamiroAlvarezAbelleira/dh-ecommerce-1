import styles from "./CartModal.module.css"
import close from "../../../assets/close.svg"
import { FC } from "react"
import Table from "../Table/Table"
import { useNavigate } from "react-router-dom"


interface Props {
    handleShowCartModal: () => void
}

const CartModal: FC<Props> = ({ handleShowCartModal }) => {

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate("/checkout")
        handleShowCartModal()
    }

    return (
        <div className={styles.modalContainer}>
            <button className={styles.modalCloseButton} onClick={handleShowCartModal}>
                <img src={close} alt="Close modal icon" />
            </button>
            <Table />
            <div className={styles.modalButtonContainer}>
                <button onClick={handleNavigate}>Checkout</button>
            </div>
        </div>
    )
}

export default CartModal