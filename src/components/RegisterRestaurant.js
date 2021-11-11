import React, { Component } from 'react'
import styles from './modules/register.module.css'
import NavBar from './NavBar'

export default class RegisterRestaurant extends Component {
    render() {
        return (
            <><NavBar />
            <div className={ styles.registerContainer }>
            <tr>
              <th>
                Username:
                </th>
                <th>
                <input className={ styles.inputStyle} type="text" username="username" />
                </th>
              </tr>
              <tr>
              <th>
                Password:
                </th>
                <th>
                <input className={ styles.inputStyle} type="text" password="password" />
                </th>
              </tr>
              <tr>
              <th>
                Name:</th>
                <th>
                <input className={ styles.inputStyle} type="text" name="name" />
                </th>
              </tr>
              <tr>
              <th>
                Address:
                </th>
                <th>
                <input className={ styles.inputStyle} type="text" address="address" />
                </th>
              </tr>
              <tr>
              <th>
                Phone:
                </th>
                  <th>
                  <input className={ styles.inputStyle} type="text" phone="phone" />
                  </th>
              </tr>
              <tr>
              <th>
                Operating hours:</th>
                <th>
                am:
                  <select>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  </select>
                  to pm:
                  <select>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  </select>
                </th>
              </tr>
              <tr>
              <th>
                Image:
                </th>
              </tr>
              <tr>
              <th>Type:</th>
                <th>
              <input className={ styles.inputStyle} type="text" asd="asd" />
              </th>
              </tr>      
              <tr>
              <th>Price:</th>
               <th><select>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  </select>
              </th>
              </tr>
                
            </div>
            </>
        )
    }
}
