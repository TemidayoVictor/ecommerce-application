import React from 'react';
import { Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import Shoppage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { getAuth, onAuthStateChanged } from "firebase/auth";


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    const auth = getAuth();
    // checking if user is logged in
    this.unsubscribeFromAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        this.setState({currentUser: user});
        console.log(user);
      }

      else {
        // user is signed out
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  
  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={Shoppage} />
          <Route path='/signIn' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
