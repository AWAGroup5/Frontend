import React from 'react'
import styles from './modules/navBar.module.css'
import Popup from './Popup'
import Userlogin from './Userlogin';

class NavBar extends React.Component {   
    constructor() {
        super();
        this.state = {
            showPopup: false,
            showLogin: false
        };
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    toggleLogin() {
        this.setState({
            showLogin: !this.state.showLogin
        });
    }

    render() {
    return (
        <div className={styles.container}>
            <div className={styles.TopBar}>
                <div className={styles.header}>
                    FoodApp
                </div>
                <div className={styles.buttons}>
                    <button className={styles.leftbuttons} onClick={ this.togglePopup.bind(this)}>
                        Register
                    </button>
                    <button className={styles.leftbuttons} onClick= { this.toggleLogin.bind(this)}>
                        User Login
                    </button>
                    { this.state.showPopup ? <Popup text='Choose your destiny' closePopup={this.togglePopup.bind(this)} /> : null }
                    { this.state.showLogin ? <Userlogin closePopup={this.toggleLogin.bind(this)} /> : null }
                </div>
            </div>
        </div>
    )
    }
}

export default NavBar;