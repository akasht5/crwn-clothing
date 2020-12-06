import React from 'react'
import './cart-dropdown.styles.scss'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
 
const CartDropdown = ({ cartItems,history,dispatch }) => {
    return (
        <div className="cart-dropdown"> 
            <div className="cart-items">
                {
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} cartItem={cartItem} />
                    )) 
                }
            </div>
            <CustomButton onClick={ () => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
            } 
            }>Checkout</CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown))
