import React, { Component } from 'react'
import styles from './modules/register.module.css'
import NavBar from './NavBar'
import Footer from './Footer'

export default class RegisterRestaurant extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeOperetingHours = this.onChangeOperetingHours.bind(this);
    this.onChangeType = this.onChangeType.bind(this);
    this.submitRegister = this.submitRegister.bind(this);

    this.state = {
        name: '',
        address: '',
        phone: '',
        operatingHours: '',
        type: '',
        price: ''
    };
}




onChangeName(e) {
    this.setState({ name: e.target.value })
}

onChangeAddress(e) {
    this.setState({ address: e.target.value })
}

onChangePhone(e) {
  this.setState({ phone: e.target.value })
}

onChangeOperetingHours(e) {
  this.setState({ operatingHours: e.target.value })
}

onChangeType(e) {
  this.setState({ type: e.target.value })
}


handleChange = e => {
  const { value } = e.target;

  this.setState({ price: value });
}

submitRegister(e) {
    e.preventDefault();
    const restaurantObject = {

        name: this.state.name,
        address: this.state.address,
        phone: this.state.phone,
        operatingHours: this.state.operatingHours,
        type: this.state.type,
        price: this.state.price
    };
    console.log(restaurantObject);

    // axios.post('http://localhost:4000/users/create', userObject)
    //     .then((res) => {
    //         console.log(res.data)
    //     }).catch((error) => {
    //         console.log(error)
    // });

    this.setState({ name: '', adress: '', phone: '',operatingHours: '', type: '', price: ''})  
    
};




    render() {
        return (
          <div>
           <NavBar />
            <div className={ styles.container }>
              <div className={ styles.registerContainer }>

                <div className={ styles.row }>
                      <div className={ styles.cell }>
                          Name:
                      </div>
                      <div className={ styles.cell }>
                            <input className={ styles.inputStyle} type="text" name="name" placeholder="Name" onChange={ this.onChangeName }></input>
                      </div>
                </div>

                <div className={ styles.row }>
                    <div className={ styles.cell }>
                          Address:
                    </div>
                      <div className={ styles.cell }>
                            <input className={ styles.inputStyle} type="text" name="address" placeholder="Address" onChange={ this.onChangeAddress }></input>
                      </div>
                </div>

                <div className={ styles.row }>
                  <div className={ styles.cell }>
                    Phone:
                  </div>
                  <div className={ styles.cell }>
                    <input className={ styles.inputStyle} type="text" name="phone" placeholder="Phone" onChange={ this.onChangePhone }></input>
                  </div>
                </div>

                <div className= { styles.row }>
                      <div className={ styles.cell }>
                            Type:
                      </div>
                      <div className={ styles.cell }>
                        <input className={ styles.inputStyle} type="text" name="type" placeholder="Type" onChange={ this.onChangeType }></input>
                      </div>
                </div>    

                <div className={ styles.row }>
                      <div className={ styles.cell }>
                            Price:
                      </div>
                      <div className={ styles.cell }>
                          <input 
                                    type="radio" 
                                    name="PriceLevel" 
                                    value="1" 
                                    onChange={ this.handleChange }>
                          </input>
                                <label htmlFor="priceLevel">$</label>
                          <input 
                                    type="radio" 
                                    name="PriceLevel" 
                                    value="2" 
                                    onChange={ this.handleChange }>
                          </input>
                                <label htmlFor="priveLevel">$$</label>
                          <input 
                                    type="radio" 
                                    name="PriceLevel" 
                                    value="3" 
                                    onChange={ this.handleChange }>
                        </input>
                                <label htmlFor="priceLevel">$$$</label>
                      </div>
                </div>

                <div className={ styles.row }>
                      <div className={ styles.cell }>
                             Operating hours:
                      </div>
                  <div className={ styles.cell }>
                    
                      <input className={ styles.inputTimeStyle}  type="text" name="operatingHours" placeholder="O-C" onChange={ this.onChangeOperetingHours }></input> 
                      {/* Close<input className={ styles.inputTimeStyle} type="text" name="closingTime" placeholder="Close" />  */}

                  </div>
                </div>

                <div className={ styles.row }>
                      <div className={ styles.cell }>
                              Image:
                      </div>
                  <div className={ styles.cell }>
                    <input
                        type="file"
                        accept="image/png, image/jpeg"
                        id="single">
                    </input>
                  </div>
                </div>

                <button 
                  className={ styles.btns} onClick={ this.submitRegister}>Register Restaurant
                </button>

               
              </div>
              <img src="BigFood.png" alt="Food" className={ styles.imageRestaurant }/>
            </div>  
           <Footer />
          </div>
        )
    }
}
