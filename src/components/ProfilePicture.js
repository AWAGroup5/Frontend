import React, { Component } from 'react'
import styles from './modules/restaurantMenu.module.css'

export default class ProfilePicture extends Component {
    render() {
        return (
            <div className={ styles.container }>
                <img src="hamburgers.jpg" alt='' className={ styles.ProfilePic }/>
            </div>
        )
    }
}