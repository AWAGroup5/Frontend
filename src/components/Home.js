import React from 'react'
import NavBar from './NavBar'
import Restaurant from './Restaurant'
import SearchBar from './SearchBar'
import Footer from './Footer'
import styles from './Home.module.css'

export default function Home() {
    return (
        <><NavBar />
        <div className= { styles.spacer }></div>
        <SearchBar />
        <div className={ styles.restaurantContainer }>
            <Restaurant />
            <Restaurant />
            <Restaurant />
        </div>
        <div className={ styles.restaurantContainer }>
            <Restaurant />
            <Restaurant />
            <Restaurant />
        </div>
        <div className={ styles.restaurantContainer }>
            <Restaurant />
            <Restaurant />
            <Restaurant />
        </div>
        <Footer />
        </>
        
    )
}
