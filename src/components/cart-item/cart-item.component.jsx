import React from 'react'
import { CartItemsContainer,CartItemImage,ItemDetailsContainer } from './cart-item.styles'

const cartItem = ({ cartItem:{ imageUrl,price,name,quantity} }) => {

    return (
        <CartItemsContainer>
            <CartItemImage src={imageUrl} alt="item"/>
            <ItemDetailsContainer>
                <span>{name}</span>
                <span>{quantity} × {price}</span>
            </ItemDetailsContainer>
        </CartItemsContainer>
    )
}

export default cartItem
