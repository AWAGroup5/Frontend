import React from 'react'
import MenuItem from './MenuItem'
import styles from './modules/restaurantMenu.module.css'

export default class FoodCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idcategory: this.props.categories.idcategory
        }
        console.log("foodcategory")
        console.log(this.props)
    }

    render() {
        return (
            <div>
                <div className={ styles.FoodCategory }> { this.props.categories.name } </div>
                {
                    this.props.products.map((item, index) => <MenuItem key={index} items={item} /> )
                }
            </div>
        )
    }
}
