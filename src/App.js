import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import ProtectedAuth from './components/HOC/ProtectedAuth';
import Login from './components/Login';
import Home from './components/Home';
import Dummy from './components/Dummy';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route path='/login' component={(Login)} />
            <Route exact path='/' component={ProtectedAuth(Home)} />
            <Route path='/home' component={ProtectedAuth(Home)} />
            <Route path='/products' component={ProtectedAuth(Dummy)} />
            <Route path='/reporting' component={ProtectedAuth(Dummy)} />
            <Route path='/users' component={ProtectedAuth(Dummy)} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
