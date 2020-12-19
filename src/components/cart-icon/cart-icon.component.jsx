import React from 'react'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'

import { CartIconContainer,ShoppingIconContainer,ItemCountContainer } from './cart-icon.styles'


const CartIcon = ({ toggleCartHidden,cartItemsCount }) => (
    <CartIconContainer className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIconContainer className="shopping-icon" />
        <ItemCountContainer className="item-count">{cartItemsCount}</ItemCountContainer>
    </CartIconContainer>
)
 
const mapStateToProps = createStructuredSelector({
    cartItemsCount : selectCartItemsCount
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden : () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)