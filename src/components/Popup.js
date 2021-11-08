import React from 'react'
import styles from './popup.module.css'

class Popup extends React.Component {
    render() {
      return (
        <div className={ styles.popup }>
            <div className={ styles.popup_inner }>
                <h1 className={ styles.header }> {this.props.text} </h1>
                <div className={ styles.buttons }>
                    <a href="userReg">
                        <button className={ styles.button } onClick={this.props.closePopup}>User</button>
                    </a>
                    <a href="resReg">
                        <button className={ styles.button } onClick={this.props.closePopup}>Restaurant</button>
                    </a>
                </div>
            </div>
        </div>
      );
    }
  }

  export default Popup;