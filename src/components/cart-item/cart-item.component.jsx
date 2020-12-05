import React from 'react'
import './cart-item.styles.scss'

const cartItem = ({ cartItem:{ imageUrl,price,name,quantity} }) => {

    return (
        <div className="cart-item">
            <img src={imageUrl} alt="item"/>
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">{quantity} × {price}</span>
            </div>
        </div>
    )
}

export default cartItem
