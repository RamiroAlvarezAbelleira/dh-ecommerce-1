// import Cards from 'react-credit-cards';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import styles from "./CreditCard.module.css"
import React, { useState } from 'react';
import { toast } from 'sonner'
import useCartContext from '../../../hooks/useCartContext';
import { CartProduct } from '../../../interface';

const CreditCard = () => {

    const [cardData, setCardData] = useState({
        number: '',
        name: '',
        expiry: '',
        cvc: '',
        focus: ''
    })

    const { dispatch } = useCartContext()

    const { number, name, expiry, cvc, focus } = cardData

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCardData({
            ...cardData,
            [e.target.name]: e.target.value
        })
    }

    const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        setCardData({
            ...cardData,
            focus: e.target.name
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if ([number, name, expiry, cvc].includes('')) {
            toast.error("all fields are required")
            return
        }

        setCardData({
            number: '',
            name: '',
            expiry: '',
            cvc: '',
            focus: ''
        })

        toast.success("Purchase completed successfully")    

        dispatch({ type: "CLEAR_CART", payload: {} as CartProduct })
    }


    return (
        <div className={styles.container}>
            <div>
                <Cards
                    number={number}
                    name={name}
                    expiry={expiry}
                    cvc={cvc}
                    focused={focus as any}
                />
            </div>
            <form onSubmit={handleSubmit}>

                <div className={styles.formControl}>
                    <label htmlFor="number">Card Number</label>
                    <input
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                        type="text"
                        name="number"
                        id="number"
                        value={number} />
                </div>

                <div className={styles.formControl}>
                    <label htmlFor="name">Card Name</label>
                    <input
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                        type="text"
                        name="name"
                        id="name"
                        value={name} />
                </div>

                {/* Group */}

                <div className={styles.formInputGroup}>
                    <div className={styles.formControl}>
                        <label htmlFor="expiry">Card Expiry</label>
                        <input
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                            type="text"
                            name="expiry"
                            id="expiry"
                            value={expiry} />
                    </div>
                    <div className={styles.formControl}>
                        <label htmlFor="cvc">Card CVC</label>
                        <input
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                            type="text"
                            name="cvc"
                            id="cvc"
                            value={cvc} />
                    </div>
                </div>
                <button type='submit' className={styles.buyButton}>Buy Now</button>
            </form>
        </div>
    )
}

export default CreditCard