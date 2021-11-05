import React from 'react'
import styles from './search.module.css'

export default function SearchBar() {
    return (
        <div className={ styles.container }>
            <label htmlFor="header-search">
                <span className={styles.visuallyhidden}>Search for restaurant</span>
            </label>
            <input
                type="text"
                id="header-search"
                placeholder="Search for restaurant"
                name="s" 
            />
            <img src="BigFood.png" alt="picture of food" className={ styles.image }/>
        </div>
    )
}
