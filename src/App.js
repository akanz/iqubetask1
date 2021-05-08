import './App.scss';
import Form from './Form'
import Billing from './Billing'
import Payment from './Payment'
import Confirm from './Confirm'

import {BrowserRouter as Router ,
        Link, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Form} />
          <Route exact path='/billing' component={Billing} />
          <Route exact path='/payment' component={Payment} />
          <Route exact path='/confirm' component={Confirm} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
