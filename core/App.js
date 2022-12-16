import React from 'react';
import { Route } from 'react-router-dom';
import MainList from './lists/MainList/MainList';
import ListPage from './lists/ListPage/ListPage';

import './reboot.css';
import './base.css';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Route path="/" exact component={MainList} />
        <Route path="/list/:id" exact component={ListPage} />
      </div>
    );
  }
}

export default App;
