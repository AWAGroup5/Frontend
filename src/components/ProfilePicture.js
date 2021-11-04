import React, { Component } from 'react'
import styles from './RestaurantInfo.module.css'

export default class ProfilePicture extends Component {
    render() {
        return (
            <div className={ styles.container }>
                <img src="hamburgers.jpg" className={ styles.ProfilePic }/>
            </div>
        )
    }
}