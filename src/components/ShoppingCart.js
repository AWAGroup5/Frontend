import React, { Component } from 'react'
import styles from './modules/ShoppingCart.module.css'
import CartItem from './CartItem';
import jwt from 'jsonwebtoken';

export default class ShoppingCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: ''
        }
    }

    totalCost() {
        let result = 0;
        for(let i=0;i<this.props.cart.length;i++) {
            result = result + this.props.cart[i].price;
        }
        return result.toFixed(2);
    }

    handleChange = (e) => {
        this.setState({ address: e.target.value })
    }
  
    onSubmit = () => {
        const decodedJwt = jwt.decode(window.localStorage.getItem('appAuthData'));
        if (decodedJwt != null) {
            if(this.props.cart.length !== 0 && this.state.address !== '') {
                let order = {
                    idcustomer: decodedJwt.user.id,
                    status: "ordered",
                    cost: this.totalCost(),
                    address: this.state.address,
                    idrestaurant: '',
                    cart: this.props.cart
                }
                console.log(order);
                this.setState({ address: '' });
                const var1 = document.getElementById("address");
                var1.value = '';
                this.props.setCart([]);
            }
        }
    }

    render() {
        return (
        <div className={styles.MDDBox}>
            <div className={ styles.blocker } onClick={this.props.closePopup}></div>
            <div>
                { this.props.cart.length !== 0 ?
                
                    this.props.cart.map((product,index) => <CartItem key={index} index={index} { ...product } {...this.props}/>)
                
                : "Cart is empty"}
                <div className={styles.CartItem}>Enter delivery location</div>

                <input name="address" id="address" type="text" placeholder="Address" onChange={ this.handleChange }></input>

                <div className={styles.TotalPrize}> Total Price: 
                    <span className ={styles.TotalPrizePrize}>{ this.totalCost() }$</span>
                </div>
                <button className={styles.Button} onClick={ this.onSubmit }>Continue to Checkout</button>
            </div>
        </div>
        )
    }
}
