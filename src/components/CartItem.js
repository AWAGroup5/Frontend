import React from 'react'

export default function CartItem(props) {

    const handleClick = () => {
        props.deleteItemFromCart(props.cart[props.index])
        
    }


    return (<>
        <div style={{display: 'flex'}} >
            <div>{ props.name }</div>

            <div>{ props.price }$</div>   

            <button onClick={ handleClick }>delete</button> 
        </div>
        
        </>
    )
}
