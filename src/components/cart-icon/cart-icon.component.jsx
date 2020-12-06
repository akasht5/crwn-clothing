import React from 'react'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'

import './cart-icon.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

const CartIcon = ({ toggleCartHidden,cartItemsCount }) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{cartItemsCount}</span>
    </div>
)
 
const mapStateToProps = createStructuredSelector({
    cartItemsCount : selectCartItemsCount
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden : () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)