import React from 'react'
import styles from './modules/restaurantMenu.module.css'
import RestaurantInfo from './RestaurantInfo'
import ProfilePicture from './ProfilePicture'
import FoodCategory from './FoodCategory';
import axios from 'axios'

export default class RestaurantMenu extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            products: [],
            //param: useParams(),
            restaurantid: 5  //This should be fetched from restaurant component
        }
    }

    componentDidMount() {
        axios.get('http://localhost/category', { params: { id: this.state.restaurantid }})
            .then(res => {
                console.log(res);
                this.setState({ categories: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })

        axios.get('http://localhost/product')
            .then(res => {
                console.log(res);
                this.setState({ products: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        return (
            <>
            <div className= { styles.spacer }></div>
            <ProfilePicture/>
            <RestaurantInfo/>
            {
                this.state.categories.map((category, index) => <FoodCategory key={index} categoryName={category.name}/>)
            }
            </>
        )
    }
}
