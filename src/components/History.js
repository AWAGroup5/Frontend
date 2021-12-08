import React, {useState, useEffect} from 'react'
import axios from 'axios'
import jwt from "jsonwebtoken";
import styles from './modules/history.module.css'




function History() {
    const [orders, setItems] = useState([]);
   

    const decodedJwt = jwt.decode(window.localStorage.getItem('appAuthData'));
    let idcustomer = null;
    if (decodedJwt != null) {
        idcustomer = decodedJwt.user.id
    } else {
        idcustomer = null
    }



  


    useEffect(() => {
        console.log(idcustomer)
        if (idcustomer != null) {
        
            axios.get('https://awaproject5db.herokuapp.com/order/customer/' + idcustomer)
                .then(res => {
                    console.log(res.data)
                    if (res.data.errno) {
                        console.log("No orders found")
                    }
                    else if (res.data == null) {
                        console.log("database error")
                    }
                    else { 
                        setItems(res.data);
                        console.log(orders) 
                    }
                })
                .catch(function (error) {
                    console.log(error);
                })
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const orderHistory = orders.map((orders, index) => 
    
        {if(orders.status === "done"){
            return(
                <div className={styles.order} key = {index }> 
                    <div className={styles.text}>OrderId: {orders.idorder}</div>
                    <div className={styles.text}>Price: {orders.cost} €</div>
                    <div className={styles.text}>Address: {orders.address}</div>
                    <div className={styles.text}>Status: {orders.status}</div>
                </div>
            )
        }}
    
    )



    


    
        return (
            <>
                <div className={ styles.container }>
                    <div>
                        {
                            orderHistory
                        }
                    </div>
                </div>
            </>
        )
    
}


export default History;