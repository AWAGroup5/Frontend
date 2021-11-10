import React, { Component } from 'react'
import NavBar from './NavBar'
import styles from './modules/Home.module.css'

export default class Manager extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className={ styles.spacer }></div>
                <h1>Manager page</h1>
                <p>This page needs Button to add new category, product and manage orders. Also all the products of this restaurant should be visible and editable</p>
            </div>
        )
    }
}
