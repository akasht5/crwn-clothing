import React from 'react'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import { CheckoutContainer,CheckoutHeaderContainer,HeaderBlockContainer,TotalContainer,TestWarningContainer } from './checkout.styles'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'

const CheckoutPage = ({ total,cartItems }) => {
    return (
        <CheckoutContainer>
            <CheckoutHeaderContainer>
                <HeaderBlockContainer>
                    <span>Image</span> 
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Description</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Quantity</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Price</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Remove</span>
                </HeaderBlockContainer>
            </CheckoutHeaderContainer>
            {
            cartItems.map(item => (
                <CheckoutItem key={item.id} item={item} />
            ))
            }
            <TotalContainer>
                <span>Total : ${total}</span>
            </TotalContainer>
            <TestWarningContainer>
            *Please use the following test credit card for payments*
            <br />
            4242 4242 4242 4242 - Exp: 01/25 - CVV: 123
            </TestWarningContainer>
            <StripeCheckoutButton price={total} />
        </CheckoutContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    total : selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)
