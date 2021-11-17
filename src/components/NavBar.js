import React from 'react'
import styles from './Home.module.css'
import { Link } from 'react-router-dom'
import CartDropDown from './CartDropDown'

export default function NavBar() {                  //NEED TO USE PROPS FOR LINK TEXTS
    return (
        <div className={styles.container}>
            <div className={styles.TopBar}>
                <div className={styles.header}>
                    FoodApp
                </div>
                <div className={styles.buttons}>
                    <button className={styles.leftbuttons}>
                        Register
                    </button>
                    <button className={styles.leftbuttons}>
                        User Login
                    </button>
                    <button className={styles.leftbuttons}>
                        Restaurant Login
                    </button>
                    <Link to="cartdropdown"><img src="carticon2.jpg" className={ styles.CartPic }/></Link>
                </div>
            </div>
        </div>
    )
}
