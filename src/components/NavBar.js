import React from 'react'
import styles from './Home.module.css'

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
                </div>
            </div>
        </div>
    )
}
