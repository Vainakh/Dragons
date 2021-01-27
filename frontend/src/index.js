import React from 'react';
import { render } from 'react-dom';
import './index.css';
import  { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import AccountDragons from './components/AccountDragons';
import Root from './components/Root';
import { fetchAuthenticated } from './actions/account';

const history = createBrowserHistory();

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

store.dispatch(fetchAuthenticated())
.then(() => {
    render(
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={Root}/> 
          <Route path='/account-dragons' component={AccountDragons} />
        </Switch>
      </Router>
    </Provider>,
    document.getElementById("root")
  );
});





