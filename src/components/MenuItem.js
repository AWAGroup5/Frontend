import React, { Component } from 'react'
import styles from './modules/restaurantMenu.module.css'

export default class MenuItem extends Component {
    render() {
        return (
                <div className={ styles.MenuItemBox }>
                    <div className={ styles.MenuItem }>{ this.props.products.name }</div>
                    <div className={ styles.ingridients }>{ this.props.products.description }</div>
                    <div className={ styles.prize }>{ this.props.products.price }</div>
                </div>          
        )
    }
}