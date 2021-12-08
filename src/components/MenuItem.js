import React, { Component } from 'react'
import styles from './modules/restaurantMenu.module.css'

export default class MenuItem extends Component {
    
    handleClick = () => {
        let item = {
            idproduct: this.props.items.idproduct,
            name: this.props.items.name,
            price: this.props.items.price
        }
        this.props.addItemToCart(item)

    }

    render() {
        const jwt = window.localStorage.getItem('appAuthData')
        return (
            <>
                <div className={ styles.MenuItemBox }>
                    <div className={ styles.MenuItem }>
                        { this.props.items.name }
                    </div>
                    <div className={ styles.ingridients }>
                        { this.props.items.description }
                    </div>
                    <div className={ styles.prize }>
                        { this.props.items.price }$
                    </div>
                    {
                        jwt ? <button onClick={ this.handleClick }>Order</button> : null
                    }

                </div>
                
            </>          
        )
    }
}