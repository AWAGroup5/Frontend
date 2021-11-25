import React from 'react'
import styles from './modules/navBar.module.css'
import Popup from './Popup'
import Userlogin from './Userlogin';
import { Link } from 'react-router-dom'
import {UserAuthContext} from '../Contexts'

class NavBar extends React.Component {   
    constructor(props) {
        super(props);
        this.state = {
            showPopup: false,
            showLogin: false
        };
    }

    static contextType = UserAuthContext;

    togglePopup() {
        this.setState({ showPopup: !this.state.showPopup });
    }

    toggleLogin() {
        this.setState({ showLogin: !this.state.showLogin });
    }

    toggleLogout() {
        this.context.logout();
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
                        this.props.logout ?
                            <button className={ styles.leftbuttons } onClick= { this.toggleLogout.bind(this)}>
                                Logout
                            </button>
                        : null
                    }
                    { this.state.showPopup ? <Popup text='Choose' closePopup={ this.togglePopup.bind(this) } /> : null }
                    { this.state.showLogin ? <Userlogin closePopup={ this.toggleLogin.bind(this) } /> : null }
                </div>
            </div>
        </div>
        <div className={ styles.spacer }></div>
        </>
    )
    }
}

export default NavBar;