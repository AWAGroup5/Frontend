import React, { Component } from 'react'
import styles from './Restaurant.module.css'

export default class Restaurant extends Component {
    render() {
        return (
            <div className={ styles.container }>
                <img src="Food.jpg" alt="picture of food" className={ styles.image }/>
                    <div className={ styles.headercontainer }>
                        <div className={ styles.header }>
                            {this.props.name}
                        </div>
                        <div className={ styles.greytext }>
                            {this.props.description}
                        </div>
                        <div className={ styles.greytext }>
                            {this.props.price}$
                        </div>
                    </div>
            </div>
        )
    }
}
