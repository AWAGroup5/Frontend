import React from 'react'
import styles from './navBar.module.css'
import Popup from './Popup'

class NavBar extends React.Component {   
    constructor() {
        super();
        this.state = {
            showPopup: false
        };
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
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
                    <a href="userlogin">
                        <button className={styles.leftbuttons}>
                            User Login
                        </button>
                    </a>
                    <a href="restaurantlogin">
                        <button className={styles.leftbuttons}>
                            Restaurant Login
                        </button>
                    </a>
                    {
                        this.state.showPopup ? <Popup text='Choose your destiny' closePopup={this.togglePopup.bind(this)} /> : null
                    }
                </div>
            </div>
        </div>
    )
    }
}

export default NavBar;