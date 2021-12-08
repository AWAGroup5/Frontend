import React, { Component } from 'react'
import styles from './modules/ShoppingCart.module.css'
import CartItem from './CartItem';
import Payment from './Payment';
import jwt from 'jsonwebtoken';
import axios from 'axios';

export default class ShoppingCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: '',
            showPayment: false
        }
    }

    totalCost() {
        let result = 0;
        for(let i=0;i<this.props.cart.length;i++) {
            result = result + (this.props.cart[i].quantity * this.props.cart[i].price);
        }
        return result.toFixed(2);
    }

    handleChange = (e) => {
        this.setState({ address: e.target.value })
        this.setState({ showPayment: false })
    }

    togglePayment = () => {
        if (this.props.cart.length !== 0 && this.state.address !== '')
            this.setState({showPayment: !this.state.showPayment})
    }
  
    onSubmit = () => {
        const decodedJwt = jwt.decode(window.localStorage.getItem('appAuthData'));
        if (decodedJwt == null) return
        if(this.props.cart.length !== 0 && this.state.address !== '') {
            let order = {
                idcustomer: decodedJwt.user.id,
                status: "ordered",
                cost: this.totalCost(),
                address: this.state.address,
                idrestaurant: this.props.cart[0].idrestaurant,
                cart: this.props.cart
            }
            console.log(order);

            axios.post("https://awaproject5db.herokuapp.com/order", order)
            .then((res) => {
                console.log("Tilaus tehty")
                console.log(res)
                let orderID = res.data.insertId

                for(let i=0;i<this.props.cart.length;i++) {
                    let product = {
                        quantity: this.props.cart[i].quantity,
                        idorder: orderID,
                        idproduct: this.props.cart[i].idproduct
                    }
                    console.log(product)
                    axios.post("https://awaproject5db.herokuapp.com/order/product", product)
                    .then((res) => {
                        console.log("Tuote lisätty")
                        console.log(res)
                    }).catch(function (err) {
                        console.log(err)
                    })
                }
                this.setState({ address: '' });
                const var1 = document.getElementById("address");
                var1.value = '';
                this.props.setCart([]);
                this.setState({ showPayment: false })
            }).catch(function(err) {
                console.log(err)
            })
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
                <button className={styles.Button} onClick={ this.togglePayment }>Continue to Checkout</button>
                {
                    this.state.showPayment ? <Payment submit={ this.onSubmit } close={ this.togglePayment }/> : null
                }
            </div>
        </div>
        )
    }
}
