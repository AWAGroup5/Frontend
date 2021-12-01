import React from 'react'

export default function CartItem(props) {
    return (
        <div>
            <div >{ props.name }</div>

            <div >{ props.price }</div>    

            <button>delete</button>
        </div>
    )
}
