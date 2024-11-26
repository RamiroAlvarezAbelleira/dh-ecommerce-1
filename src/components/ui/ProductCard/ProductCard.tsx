import { FC } from "react"
import { CartProduct, Product } from "../../../interface"
import styles from "./ProductCard.module.css"
import {toast} from "sonner"
import { addToCart } from "../CartModal/cartSlice"
import { useDispatch } from "react-redux"
import useThemeContext from "../../../hooks/useThemeContext"

interface Props {
    product: Product
}

const ProductCard: FC<Props> = ({ product }) => {

    const { isDarkMode } = useThemeContext()

    const dispatch = useDispatch()

    const item: CartProduct = {
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        quantity: 1
    }

    const addToCartAction = (item: CartProduct) => {
        dispatch(addToCart(item))
        toast.success("Product added to cart")
    }

    return (
        <div className={isDarkMode ? styles.cardContainerDark : styles.cardContainer }>
            <img className={styles.cardImage} src={product.image} alt={product.name} />
            <div className={styles.cardDetail}>
                <h3 className={styles.cardTitle}>{product.name}</h3>
                <div className={styles.cardBody}>
                    <p className={styles.cardType}>{product.type}</p>
                    <p className={styles.cardPrice}>price: <small>{product.price}</small></p>

                </div>
                <button className={styles.cardButton} onClick={() => addToCartAction(item)}>Add to cart</button>
            </div>
        </div>
    )
}

export default ProductCard