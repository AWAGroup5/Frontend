import React, { Component } from 'react'
import styles from './modules/register.module.css'
import axios from 'axios';

export default class RegisterRestaurant extends Component {
    constructor(props) {
        super(props);


        this.state = {
            username: '',
            password: '',
            usernameE: false,
            passwordE: false
        };
    }


    onChangeUsername = (e) => {
        this.setState({ username: e.target.value })
    }

    onChangePassword = (e) => {
        this.setState({ password: e.target.value })
    }


    onSubmit = () => { 

        if(this.state.username === '') {
            this.setState({ usernameE: true })
        } else this.setState ({ usernameE: false})

        if(this.state.password === '') {
            this.setState({ passwordE: true })
        }else this.setState({ passwordE: false}, () => this.sendToAPI());
    }

    sendToAPI() {
        if(this.state.usernameE !== true && this.state.passwordE !== true){
            let userObject = {
                username: this.state.username,
                password: this.state.password

            }
            console.log(userObject);

            axios.post('https://awaproject5db.herokuapp.com/customer/register', userObject)
            .then((res) => {
                console.log(res.data)
                this.resetValues();
                window.location = "/";
            }).catch((error) => {
                console.log(error)
            });

        }
        
    }

    resetValues() {
        var var1 = document.getElementById("username");
        var var2 = document.getElementById("password");

        var1.value = '';
        var2.value = '';
        this.setState({ username: ''});
        this.setState({ password: ''});
    }



    render() {
        return (
            <div>
                    <div className={ styles.container }>
                        <img src="BigFood.png" alt="Food" className={ styles.imageUser }/>
                            <div className={ styles.registerContainer }>

                                <div className={styles.row}>
                                      <div className={ styles.cell }>
                                            Username:
                                      </div>
                                      <div className={ styles.cell }>
                                            <input 
                                                className={ styles.inputStyle} 
                                                type="text" 
                                                id="username"
                                                placeholder="Username" 
                                                onChange={ this.onChangeUsername }>
                                            </input>
                                      </div>
                                </div>
                                {
                                 this.state.usernameE ? <div className={ styles.error }>Insert name</div>: null
                                }
                                <div className={styles.row}>
                                    <div className={ styles.cell }>
                                        Password:
                                    </div>
                                    <div className={ styles.cell }>
                                        <input 
                                        className={ styles.inputStyle} 
                                        type="password" 
                                        id="password"
                                        placeholder="Password" 
                                        onChange={ this.onChangePassword }>
                                        </input>
                                    </div>
                                </div >
                                {
                                 this.state.passwordE ? <div className={ styles.error }>Insert password</div>: null
                                }           
                                <div>
                                     <button 
                                            className={ styles.btns } 
                                            onClick={ this.onSubmit}>
                                              Register user
                                      </button>
                                </div>
                            </div>
                    </div>
            </div>
        )
    }
}