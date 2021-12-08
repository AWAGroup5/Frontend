import React from 'react'
import styles from './modules/navBar.module.css'
import Userlogin from './Userlogin';
import ShoppingCart from './ShoppingCart';
import { Link } from 'react-router-dom'
import {UserAuthContext} from '../Contexts'

class NavBar extends React.Component {   
    constructor(props) {
        super(props);
        this.state = {
            showPopup: false,
            showLogin: false,
            showCart: false
        };
    }

    static contextType = UserAuthContext;

    togglePopup() {
        this.setState({ showPopup: !this.state.showPopup });
    }

    toggleLogin() {
        this.setState({ showLogin: !this.state.showLogin });
    }

    toggleCart() {
        this.setState({ showCart: !this.state.showCart });
    }

    toggleLogout() {
        this.context.logout();
        this.setState({ showCart: false });
    }

    render() {
    return (
        <>
        <div className={ styles.container }>
            <div className={ styles.TopBar }>
                <Link to="/" className={styles.header }>
                    FoodApp
                </Link>
                <div className={ styles.buttons }>
                    {
                        this.props.register ? 
                            <button className={ styles.leftbuttons }>
                                <Link to="/userReg" className={ styles.leftbuttons }>
                                    Register
                                </Link>
                            </button>
                        : null
                    }
                    {
                        this.props.login ?
                            <button className={ styles.leftbuttons } onClick= { this.toggleLogin.bind(this)}>
                                User Login
                            </button>
                        : null
                    }
                    {
                        this.props.cart ?
                            <img src="/carticon2.jpg" alt='' className={ styles.CartPic } onClick= { this.toggleCart.bind(this)}/>
                        : null
                    }
                    {
                        this.props.logout ?
                            <button className={ styles.leftbuttons } onClick= { this.toggleLogout.bind(this)}>
                                Logout
                            </button>
                        : null
                    }
                    { 
                        this.state.showLogin ? 
                            <Userlogin closePopup={ this.toggleLogin.bind(this) } /> 
                        : null 
                    }
                    { 
                        this.state.showCart ? 
                            <ShoppingCart cart={this.props.cart} setCart={this.props.setCart} deleteItemFromCart={ this.props.deleteItemFromCart } closePopup={ this.toggleCart.bind(this) } /> 
                        : null 
                    }
                </div>
            </div>
        </div>
        <div className={ styles.spacer }></div>
        </>
    )
    }
}

export default NavBar;