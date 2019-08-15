import React, {Component, Fragment} from 'react';
import { HashRouter as Router, Route } from "react-router-dom";

import MWLayout from './components/MWLayout';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Mine from './pages/Mine';









class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      <Fragment>
        <Router>

          <Route path="/" render={(props) => <MWLayout {...props}><Home/></MWLayout>} exact />
          <Route path="/Cart" render={(props) => <MWLayout {...props}> <Cart/> </MWLayout>} />
          <Route path="/Mine" render={(props) => <MWLayout {...props}> <Mine/> </MWLayout>} />

        </Router>
      </Fragment>
    );
  }
}


export default App;
