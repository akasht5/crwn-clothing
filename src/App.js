import React,{ Component } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component' 
import { 
  Route,
  Switch,
  Link
} from 'react-router-dom'
import { auth,createUserProfileDocument } from './firebase/firebase.utils'
import SignInAndSignUpPage from './pages/signin-signup/signin-signup.component';
import { setCurrentUser } from './redux/user/user.actions';
import { connect } from 'react-redux'

const Hats = (props) => {
  return (
    <div>
        <h1>Hats</h1>
        <Link to={`${props.match.url}/1`}>Hat 1</Link><br/>
        <Link to={`${props.match.url}/100`}>Hat 100</Link>
    </div>
    
)}

const Hat = ({ match }) => {
  return (
    <h1>This is hat no :{match.params.hatid}</h1>
    
  )
}
const Jackets = () => {
    return <h1>Jackets</h1>
}

const Sneakers = () => {
    return <h1>Sneakers</h1>
}

const Womens = () => {
  return <h1>Womens</h1>
}

const Mens = () => {
  return <h1>Mens</h1>
}



class App extends Component{
  unsubscribeFromAuth = null;

  componentDidMount(){
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
          const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot(snapshot => {
              setCurrentUser({
                  id : snapshot.id,
                  ...snapshot.data()
                });
          });
      }

      setCurrentUser(userAuth);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
 
  render(){
    return (
      
        <div>
          <Header />
          <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/shop' component={ShopPage} />
              <Route exact path='/signin' component={SignInAndSignUpPage} />
              <Route exact path='/hats' component={Hats} />
              <Route exact path='/hats/:hatid' component={Hat} />
              <Route exact path='/jackets' component={Jackets} />
              <Route exact path='/sneakers' component={Sneakers} />
              <Route exact path='/womens' component={Womens} />
              <Route exact path='/mens' component={Mens} />
          </Switch>   
       </div>
      
    );
  }
  
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
});

export default connect(null,mapDispatchToProps)(App);
