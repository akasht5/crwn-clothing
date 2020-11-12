import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component' 
import { 
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

const Hats = (props) => {
  return (
    <div>
        <h1>Hats</h1>
        <Link to={`${props.match.url}/1`}>Hat 1</Link><br/>
        <Link to={`${props.match.url}/100`}>Hat 100</Link>
    </div>
    
)}

const Hat = ({ match,history,location }) => {
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



function App() {
  return (
    <Router>
      <div>
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/shop' component={ShopPage} />
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

export default App;
