import React,{ Component } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component' 
import { 
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import { auth,createUserProfileDocument } from './firebase/firebase.utils'
import SignInAndSignUpPage from './pages/signin-signup/signin-signup.component';

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
  constructor(){
    super();

    this.state = {
      currentUser : null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
          const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot((snapshot) => {
              this.setState({
                currentUser : {
                  id : snapshot.id,
                  ...snapshot.data()
                }
              },() => console.log({user : this.state.currentUser}));
          });
      }
        this.setState({ currentUser:userAuth });
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
 
  render(){
    return (
      <Router>
        <div>
          <Header currentUser={this.state.currentUser} />
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
      </Router>
    );
  }
  
}

export default App;
