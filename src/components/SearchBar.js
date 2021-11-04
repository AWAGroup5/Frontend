import React from 'react'
import styles from './search.module.css'

export default function SearchBar() {
    return (
        <div className={ styles.container }>
            <div>
                Search Bar goes here
            </div>
            <img src="BigFood.png" alt="picture of food" className={ styles.image }/>
        </div>
    )
}
