import React from 'react'
import styles from './modules/payment.module.css'

export default function Payment(props) {
    return (
        <>
        <div className={ styles.blocker } onClick={ props.close }></div>
            <div className={ styles.popup_inner }>
                <h1 className={ styles.header }> Confirm and pay </h1>
                <button className={ styles.button } onClick={ props.submit }>PAY</button>
            </div>
        </>
    )
}
