import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Main from './Main';
import Input from './Input';
import Search from './Search';
import About from './About';
import Tableview from './Tableview';

class App extends Component {
  render() {
    return (

        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/input" component={Input} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/about" component={About} />
          <Route exact path="/tableview" component={Tableview} />
        </Switch>
    );
  }
}

export default App;