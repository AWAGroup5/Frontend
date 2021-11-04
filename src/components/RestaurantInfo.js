import React, { Component } from 'react'
import styles from './RestaurantInfo.module.css'

export default class RestaurantInfo extends Component {
    render() {
        return (
            <div>
                <div className={ styles.resinfoname }>Restaurant Name</div>
                <div className={ styles.resinfodescript }>this is a cool and very epic restaurant etc this is a cool and very epic restaurant etc 
                this is a cool and very epic restaurant etc this is a cool and very epic restaurant etc this is a cool and very epic restaurant etc </div>
            </div>
            
        )
    }
}