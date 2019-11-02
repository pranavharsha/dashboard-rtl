import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>

          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
