import React, { Component } from 'react'
import styles from './modules/ShoppingCart.module.css'
import CartItem from './CartItem';


export default class ShoppingCart extends Component {
    constructor(props) {
        super(props);

    }

   


    render() {
        return (
        <div className={styles.MDDBox}>
            <div className={ styles.blocker } onClick={this.props.closePopup}></div>
            <div>

                {
                    this.props.cart.map(product => <CartItem { ...product } />)
                }
                <div className={styles.CartItem}>Enter delivery location</div>

                <input></input>

                <div className={styles.TotalPrize}> Total Prize: 
                    <span className ={styles.TotalPrizePrize}>{ this.props.cost }</span>
                </div>
                <button className={styles.Button}>Continue to Checkout</button>
            </div>
        </div>
        )
    }
}
