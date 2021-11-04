import React from 'react'
import styles from './navBar.module.css'

class NavBar extends React.Component {   
    render() {              //NEED TO USE PROPS FOR LINK TEXTS
    return (
        <div className={styles.container}>
            <div className={styles.TopBar}>
                <div className={styles.header}>
                    FoodApp
                </div>
                <div className={styles.buttons}>
                    <a href="register">
                        <button className={styles.leftbuttons}>
                            Register
                        </button>
                    </a>
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
                </div>
            </div>
        </div>
    )
    }
}

export default NavBar;