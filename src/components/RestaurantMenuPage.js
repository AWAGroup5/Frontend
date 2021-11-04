import React from 'react'
import NavBar from './NavBar'
import Restaurant from './Restaurant'
import SearchBar from './SearchBar'
import Footer from './Footer'
import styles from './Home.module.css'
import RestaurantInfo from './RestaurantInfo'
import FoodCategory from './FoodCategory'
import MenuItem from './MenuItem'
import ProfilePicture from './ProfilePicture'

export default function RestaurantMenuPage() {
    return (
        <><NavBar />
        <div className= { styles.spacer }></div>
        <ProfilePicture/>
        <RestaurantInfo/>
        <FoodCategory/>
        <div className= { styles.flexx}>
        <MenuItem/> <MenuItem/> <MenuItem/> <MenuItem/>
        </div>
        <Footer />
        </>
        
    )
}