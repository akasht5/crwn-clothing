import React from 'react'

import { connect } from 'react-redux'
import { clearItemFromCart } from '../../redux/cart/cart.actions'
import { addItem,removeItem } from '../../redux/cart/cart.actions'

import { CheckoutItemContainer,ImageContainer,TextContainer,QuantityContainer,RemoveButtonContainer } from './checkout-item.styles'

const CheckoutItem = ({ item,clearItem,addItem,removeItem }) => {
    const {imageUrl,name,quantity,price } = item;

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt="item"/>
            </ImageContainer>
            <TextContainer>{name}</TextContainer>
            <QuantityContainer>
                <div onClick={() => removeItem(item)}>&#10094;</div>
                <span>{quantity}</span>
                <div onClick={() => addItem(item)}>&#10095;</div>
            </QuantityContainer>
            <TextContainer>{price}</TextContainer>
            <RemoveButtonContainer onClick={() => clearItem(item)}>&#10005;</RemoveButtonContainer>
        </CheckoutItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem : item => dispatch(clearItemFromCart(item)),
    addItem : item => dispatch(addItem(item)),
    removeItem : item => dispatch(removeItem(item))
});

export default connect(null,mapDispatchToProps)(CheckoutItem)

