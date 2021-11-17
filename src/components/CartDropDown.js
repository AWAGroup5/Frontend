import React from 'react'
import styles from './CartDropDown.module.css'
import { Link } from 'react-router-dom'

export default function CartDropDown() {                  //NEED TO USE PROPS FOR LINK TEXTS
    return (
        <div className={styles.MDDBox}>
            <div className={styles.CartItem}> 1. Some Kebab:</div>
            <div className={styles.CartPrize}> 12.99€</div>
            <div className={styles.CartItem}> 13. Some Pizza:</div>
            <div className={styles.CartPrize}> 11.99€</div>
            <div className={styles.TotalPrize}> Total Prize: <span className ={styles.TotalPrizePrize}>24.98€</span></div>
        </div>
    )
}