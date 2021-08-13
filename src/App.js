import React,{ useEffect } from 'react';
import { GlobalStyle } from './global.styles';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import ContactPage from './pages/contact/contact.component'
import Header from './components/header/header.component' 
import CheckoutPage from './pages/checkout/checkout.component'
import { 
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import SignInAndSignUpPage from './pages/signin-signup/signin-signup.component';
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from './redux/user/user.actions';
import { connect } from 'react-redux'

const App = ({ checkUserSession,currentUser }) => {
  useEffect(() => {
      checkUserSession();
  },[checkUserSession])
 
  return (
    
      <div>
        <GlobalStyle />
        <Header />
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/contact' component={ContactPage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route exact path='/signin' render={() => 
                currentUser ? (
                  <Redirect to='/' />
                ) : (
                  <SignInAndSignUpPage />
                )
            } />
        </Switch>   
      </div>
  );
  
}

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession : () => dispatch(checkUserSession())
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
