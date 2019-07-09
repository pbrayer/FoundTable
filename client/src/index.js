import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import App from './App';
import Input from './Input';
import Search from './Search';
import About from './About';
import Tableview from './Tableview';

import ReactDOM from 'react-dom';

const RouterMapping = () => (
  <Router>
    <Route exact path='/' component={App} />
    <Route exact path='/input' component={Input} />
    <Route exact path='/search' component={Search} />
    <Route exact path='/about' component={About} />
    <Route exact path='/tableview' component={Tableview} />
  </Router>
);

ReactDOM.render(<RouterMapping />, document.getElementById('root'));

