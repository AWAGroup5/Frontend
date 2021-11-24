import React, { Component } from 'react'
import styles from './modules/restaurantMenu.module.css'

export default class MenuItem extends Component {
    render() {
        return (
                <div className={ styles.MenuItemBox }>
                    <div className={ styles.MenuItem }>1. Menu Item</div>
                    <div className={ styles.ingridients }>ingridients ingridients ingridients ingridients ingridients ingridients </div>
                    <div className={ styles.prize }>10.99€</div>
                </div>
            
        )
    }
}