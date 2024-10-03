// import Cards from 'react-credit-cards';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import styles from "./CreditCard.module.css"

const CreditCard = () => {
    return (
        <div className={styles.container}>
            <div>
                <Cards
                    number={""}
                    name={""}
                    expiry={""}
                    cvc={""}
                    focused={""}
                />
            </div>
            <form>

                <div className={styles.formControl}>
                    <label htmlFor="number">Card Number</label>
                    <input type="text" name="number" id="number" />
                </div>

                <div className={styles.formControl}>
                    <label htmlFor="name">Card Name</label>
                    <input type="text" name="name" id="name" />
                </div>

                {/* Group */}

                <div className={styles.formInputGroup}>
                    <div className={styles.formControl}>
                        <label htmlFor="expiry">Card Expiry</label>
                        <input type="text" name="expiry" id="expiry" />
                    </div>
                    <div className={styles.formControl}>
                        <label htmlFor="cvc">Card CVC</label>
                        <input type="text" name="cvc" id="cvc" />
                    </div>
                </div>
            </form>
            <button className={styles.buyButton}>Buy Now</button>
        </div>
    )
}

export default CreditCard