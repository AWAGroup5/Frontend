import React, { Component } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import styles from './modules/Manager.module.css'
import { Link } from 'react-router-dom'

export default class Manager extends Component {
    constructor(props) {
        super(props);
        this.state= {
            history: false,
        };
    }

    orderStatus() {
        if (this.state.history === false)
            return "current orders";
        else return "order history"
    }

    render() {
        return (
            <div>
                <NavBar />
                <div className={ styles.buttonfield }>
                    <div className={ styles.leftbuttonscontainer }>
                        <Link to="newproduct">
                            <button className={ styles.leftbuttons }>New product</button>
                        </Link>
                    </div>
                    <div className={ styles.textnbuttons }>
                        <div className={ styles.textField }>
                            <div className={ styles.listHeader}>
                                List of orders
                            </div>
                            <div className={ styles.content }>
                                { this.orderStatus() }
                            </div>
                        </div>
                        <div className={ styles.orderbuttons }>
                            <button className={ styles.btns } onClick={() => this.setState({ history: true })}>History</button>
                            <button className={ styles.btns } onClick={() => this.setState({ history: false })}>Current</button>
                        </div>
                    </div>
                </div>
                <div className={ styles.spacer }>
                    All categories and products of the restaurant goes here. If products are clicked from here, it takes you to edit that product
                </div>
                <Footer />
            </div>
        )
    }
}
