import { useDispatch, useSelector } from "react-redux"
import { CartProduct } from "../../../interface"
import { IRootState } from "../../../store"
import { addToCart, removeFromCart } from "../CartModal/cartSlice"
import styles from "./Table.module.css"


const Table = () => {
  const dispatch = useDispatch()

  const cartItems = useSelector((state:IRootState) => state.cartSlice.cartItems)
  
  const removeFromCartAction = (item: CartProduct) => {
    dispatch(removeFromCart(item))
  }

  const addToCartAction = (item: CartProduct) => {
    dispatch(addToCart(item))
  }

  const totalPay = () => {
    const total = cartItems.reduce((acc, item) => {
      return acc + item.price * item.quantity
    }, 0)
    return total
  }
  return (
    <>
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
                      onClick={() => removeFromCartAction(item)}
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
                      onClick={() => addToCartAction(item)}
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
        <h3>Total: ${totalPay()}</h3>
      </div>
    </>
  )
}

export default Table