import React, { Component } from 'react'
import styles from './modules/restaurantMenu.module.css'

export default class MenuItem extends Component {

    
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
                        jwt ? <button>Jou</button> : null
                    }
                    
                </div>
                
            </>          
        )
    }
}