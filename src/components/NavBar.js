import React from 'react'
import styles from './modules/navBar.module.css'
import Popup from './Popup'
import Userlogin from './Userlogin';
import { Link } from 'react-router-dom'

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
        <>
        <div className={styles.container}>
            <div className={styles.TopBar}>
                <Link to="/" className={styles.header}>
                    FoodApp
                </Link>
                <div className={styles.buttons}>
                    <Link to="/restaurant">
                        TEST
                    </Link>
                        
                    <button className={styles.leftbuttons} onClick={ this.togglePopup.bind(this) }>
                        Register
                    </button>
                    <button className={styles.leftbuttons} onClick= { this.toggleLogin.bind(this)}>
                        User Login
                    </button>
                    { this.state.showPopup ? <Popup text='Choose' closePopup={this.togglePopup.bind(this)} /> : null }
                    { this.state.showLogin ? <Userlogin closePopup={this.toggleLogin.bind(this)} /> : null }
                </div>
            </div>
        </div>
        <div className={ styles.spacer }></div>
        </>
    )
    }
}

export default NavBar;