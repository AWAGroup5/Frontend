import React, { useState, useEffect } from 'react'
import styles from './modules/restaurantMenu.module.css'
import RestaurantInfo from './RestaurantInfo'
import ProfilePicture from './ProfilePicture'
import FoodCategory from './FoodCategory';
import axios from 'axios'
import { useParams } from 'react-router';

export default function RestaurantMenu() {

    const { restaurantId } = useParams();

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        console.log("restaurantid: " + restaurantId)
        const path = 'https://awaproject5db.herokuapp.com/restaurant/' + restaurantId + '/menu'
        axios.get(path)
            .then(res => {
                console.log(res);
                setMenu(res.data);
            })
            .catch(function (error) {
                console.log(error);
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className={ styles.container }>
            <div className= { styles.spacer }></div>
            <ProfilePicture/>
            <RestaurantInfo/>
            {
                menu.map((menu, index) => <FoodCategory key={index} menu={menu}/>)
            }
        </div>
    )
}
