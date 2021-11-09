import React, { Component } from 'react'
import styles from './userlogin.module.css'

export default class Userlogin extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    submitLogin(e) {};

    render() {
        return (
            <>
            <div className={ styles.blocker } onClick={this.props.closePopup}></div>
            <div className={ styles.popup }>
                <div className={ styles.container}>
                    <label for="username" className={ styles.text }>Username:</label>
                    <input type="text" name="username" placeholder="Username"></input>
                </div>
                <div className={ styles.container}>
                <label for="password" className={ styles.text }>Password:</label>
                    <input type="password" name="password" placeholder="Password"></input>
                </div>
                <button className={ styles.button } onClick={( this.submitLogin.bind(this), this.props.closePopup )}>Login</button> 
            </div>
            </>
        )
    }
}
