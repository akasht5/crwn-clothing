import React from 'react'

import './cart-icon.styles.scss'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'
import { connect } from 'react-redux'

const CartIcon = ({ toggleCartHidden,cartItemsCount }) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{cartItemsCount}</span>
    </div>
)
 
const mapStateToProps = (state) => {
    return ({
        cartItemsCount : selectCartItemsCount(state)
    })
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden : () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)