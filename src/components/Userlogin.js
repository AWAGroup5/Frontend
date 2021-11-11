import React, { Component } from 'react'
import styles from './modules/userlogin.module.css'
import axios from 'axios';

export default class Userlogin extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.submitLogin = this.submitLogin.bind(this);

        this.state = {
            username: '',
            password: '',
            choice: ''
        };
    }

    handleChange = e => {
        const { id } = e.target;

        this.setState({ choice: id });
    }
    
    onChangeUsername(e) {
        this.setState({ username: e.target.value })
    }

    onChangePassword(e) {
        this.setState({ password: e.target.value })
    }

    submitLogin(e) {
        e.preventDefault();
        const userObject = {
            username: this.state.username,
            password: this.state.password,
            choice: this.state.choice
        };
        console.log(userObject);

        axios.post('http://localhost:4000/users/create', userObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
        });

        this.setState({ username: '', password: ''})
        this.props.closePopup();  
        
    };

    render() {
        return (
            <>
            <div className={ styles.blocker } onClick={this.props.closePopup}></div>
            <div className={ styles.popup }>
                <div className={ styles.container}>
                    <label htmlFor="username" className={ styles.text }>Username:</label>
                    <input type="text" name="username" placeholder="Username" onChange={ this.onChangeUsername }></input>
                </div>
                <div className={ styles.container}>
                <label htmlFor="password" className={ styles.text }>Password:</label>
                    <input type="password" name="password" placeholder="Password" onChange={ this.onChangePassword }></input>
                </div>
                <div className={ styles.checklogin }>
                    <div className={ styles.checkcontainer }>
                        <div className={ styles.radioUser }>
                            <input type="radio" id="user" name="choose" value="User" onChange={ this.handleChange }></input><br/>
                            <label for="user"> User</label><br/>
                        </div>
                        <div className={ styles.radioRestaurant }>
                            <input type="radio" id="restaurant" name="choose" value="Restaurant" onChange={ this.handleChange }></input>
                            <label for="restaurant"> Restaurant</label><br/>
                        </div>
                    </div>
                    <button className={ styles.button } onClick={( this.submitLogin )}>Login</button>
                </div>
            </div>
            </>
        )
    }
}