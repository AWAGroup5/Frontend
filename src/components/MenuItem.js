import React, { Component } from 'react'
import styles from './modules/restaurantMenu.module.css'

export default class MenuItem extends Component {
    
    handleClick = () => {
        let item = {
            quantity: 1,
            idproduct: this.props.items.idproduct,
            name: this.props.items.name,
            price: this.props.items.price,
            idrestaurant: this.props.idrestaurant
        }
        this.props.addItemToCart(item)
    }

    render() {
        const jwt = window.localStorage.getItem('appAuthData')
        return (
            <div className={ styles.flexx }>
                <div className={ styles.Itemcontainer }>
                    <img src={ this.props.items.imageUrl } alt='' className={ styles.image } />
                    <div className={ styles.headerContainer}>
                        <div className={ styles.header }>
                            { this.props.items.name }
                        </div>
                        <div className={ styles.greytext }>
                            { this.props.items.description }
                        </div>
                        <div className={ styles.price }>
                            { this.props.items.price }$
                        </div>
                    </div>
                    {
                        jwt ? <button className={ styles.button } onClick={ this.handleClick }>Add to Cart</button> : null
                    }
                </div>
            </div>          
        )
    }
}