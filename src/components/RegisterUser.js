import React, { Component } from 'react'
import styles from './modules/register.module.css'
import NavBar from './NavBar'

export default class RegisterRestaurant extends Component {
    render() {
        return (
            <><NavBar />
            <div className={ styles.registerContainer }>
              <tr>
              <th>
                Username:
                </th>
                <th>
                <input className={ styles.inputStyle} type="text" password="password" />
                </th>
              </tr>
              <tr>
              <th>
                Password:
                </th>
                <th>
                <input className={ styles.inputStyle} type="text" name="name" />
                </th>
              </tr>           
            </div>
            </>
        )
    }
}