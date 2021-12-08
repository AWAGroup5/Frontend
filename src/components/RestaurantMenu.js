import React, { useState, useEffect } from 'react'
import styles from './modules/restaurantMenu.module.css'
import RestaurantInfo from './RestaurantInfo'
import FoodCategory from './FoodCategory';
import axios from 'axios'
import { useParams } from 'react-router';

export default function RestaurantMenu(props) {

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
        <>
        <div className= { styles.spacer }></div>
        <RestaurantInfo idrestaurant={restaurantId}/>
        <div className={ styles.container }>
            {
                menu.map((menu, index) => <FoodCategory menu={menu} key={index} idrestaurant={restaurantId} {...props}/>)
            }
        </div>
        </>
    )
}
