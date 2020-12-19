import React from 'react'

import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import CartItem from '../cart-item/cart-item.component'
import { CartDropdownContainer,CartItemsContainer,CheckoutButton,EmptyMessageContainer } from './cart-dropdown.styles'
 
const CartDropdown = ({ cartItems,history,dispatch }) => {
    return (
        <CartDropdownContainer> 
            <CartItemsContainer>
                {
                    cartItems.length ?
                    (
                        cartItems.map(cartItem => (
                            <CartItem key={cartItem.id} cartItem={cartItem} />
                        ))
                    ) : (
                        <EmptyMessageContainer>Your Cart is empty !</EmptyMessageContainer>
                    )
                }
            </CartItemsContainer>
            <CheckoutButton onClick={ () => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
            } 
            }>Checkout</CheckoutButton>
        </CartDropdownContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown))
