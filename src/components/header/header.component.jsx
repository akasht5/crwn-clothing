import React from 'react'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { HeaderContainer,LogoContainer,OptionsContainer,OptionLink }from './header.styles'
import { signOutStart } from '../../redux/user/user.actions'

const Header = ({ currentUser,hidden,signOutStart }) => {
    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className="logo" />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to="/shop">SHOP</OptionLink>
                <OptionLink to="/contact" className="option">CONTACT</OptionLink>
                {
                    currentUser ?
                    (
                        <OptionLink as='div' onClick={() => signOutStart() }>SIGN OUT</OptionLink>
                    ):(
                        <OptionLink to='/signin'>SIGN IN</OptionLink>
                    )
                }
                <CartIcon />
            </OptionsContainer>
            {
                hidden ? null : <CartDropdown data-test="cartdropdown" />
            }
            
        </HeaderContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser,
    hidden : selectCartHidden
});

const mapDispatchToProps = dispatch => ({
    signOutStart : () => dispatch(signOutStart())
})

export default connect(mapStateToProps,mapDispatchToProps)(Header)
