import React from 'react'
import MenuItem from './MenuItem'
import styles from './modules/restaurantMenu.module.css'

export default class FoodCategory extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className={ styles.FoodCategory }> { this.props.menu.categoryName } </div>
                <div className={ styles.flexx}>
                    {
                        this.props.menu.products.map((item, index) => <MenuItem key={index} items={item} {...this.props} /> )
                    }
                </div>
            </div>
        )
    }
}
