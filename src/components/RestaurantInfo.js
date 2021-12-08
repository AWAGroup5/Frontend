import axios from 'axios'
import React, { Component } from 'react'
import styles from './modules/restaurantMenu.module.css'

export default class RestaurantInfo extends Component {     //Image url from state!!
    constructor(props) {
        super(props)
        this.state = {
            restaurantData: {}
        }
    }

    componentDidMount() {
        axios.get('https://awaproject5db.herokuapp.com/restaurant/single/' + this.props.idrestaurant)
        .then((res) => {
            this.setState({ restaurantData: res.data })
        }).catch(function(err) {
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <img src={ this.state.restaurantData.imageUrl} alt='food' className={ styles.ProfilePic }/>
                
                <div className={ styles.resinfoname }>{ this.state.restaurantData.name }</div>
                <div className={ styles.resinfodescript }>{ this.state.restaurantData.description }</div>
            </div>
            
        )
    }
}