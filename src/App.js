import React from 'react';
import { Switch, Route} from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import Shoppage from './pages/shop/shop.component';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={Shoppage} />
      </Switch>
    </div>
  );
}

export default App;
