import React from 'react'
import styles from './modules/ShoppingCart.module.css'


export default function ShoppingCart(props) {
    return (
        <div className={styles.MDDBox}>
            <div className={ styles.blocker } onClick={props.closePopup}></div>
            <div>
                <div className={styles.CartItem}> 1. Some Kebab:</div>
                <div className={styles.CartPrize}> 12.99€</div>
                <div className={styles.CartItem}> 13. Some Pizza:</div>
                <div className={styles.CartPrize}> 11.99€</div>
                <div className={styles.CartItem}>Enter delivery location</div>
                <input></input>
                <div className={styles.TotalPrize}> Total Prize: <span className ={styles.TotalPrizePrize}>24.98€</span></div>
                <button className={styles.Button}>Continue to Checkout</button>
            </div>
        </div>
    )
}