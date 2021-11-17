import React, { Component } from 'react'
import styles from './modules/register.module.css'
import NavBar from './NavBar'
import Footer from './Footer'

export default class RegisterRestaurant extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.submitRegister = this.submitRegister.bind(this);

    this.state = {
        username: '',
        password: '',
    };
}


onChangeUsername(e) {
    this.setState({ username: e.target.value })
}

onChangePassword(e) {
    this.setState({ password: e.target.value })
}

submitRegister(e) {
    e.preventDefault();
    const userObject = {
        username: this.state.username,
        password: this.state.password,
    };
    console.log(userObject);

    // axios.post('http://localhost:4000/users/create', userObject)
    //     .then((res) => {
    //         console.log(res.data)
    //     }).catch((error) => {
    //         console.log(error)
    // });

    this.setState({ username: '', password: ''})  
    
};


    render() {
        return (
          <div>
            <NavBar />
              <div className={ styles.container }>
              <img src="BigFood.png" alt="Food" className={ styles.imageUser }/>
                <div className={ styles.registerContainer }>

                  <div className={styles.row}>
                        <div className={ styles.cell }>
                              Username:
                        </div>
                        <div className={ styles.cell }>
                              <input className={ styles.inputStyle} type="text" name="username" placeholder="Username" onChange={ this.onChangeUsername }></input>
                        </div>
                  </div>

                  <div className={styles.row}>
                        <div className={ styles.cell }>
                             Password:
                        </div>
                        <div className={ styles.cell }>
                              <input className={ styles.inputStyle} type="password" name="password" placeholder="Password" onChange={ this.onChangePassword }></input>
                        </div>
                  </div >           
                  <div>
                        <button 
                              className={ styles.btns } onClick={ this.submitRegister}>Register user
                        </button>
                    </div>
                  </div>
               </div>
            <Footer />
          </div>
        )
    }
}