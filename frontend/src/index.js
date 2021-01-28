import React from 'react';
import { render } from 'react-dom';
import './index.css';
import  { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
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

const RedirectToAccountDragons = () => {
  return (
    <Redirect 
      to={{ pathname: '/account-dragons' }}
      onChange={window.location.href='/account-dragons'}
    />
  )
};

const AuthRoute = (props) => {
  if (!store.getState().account.loggedIn) {
    return <Redirect to={{ pathname: '/account-dragons' }}
    onChange={window.location.href='/account-dragons'}/>
  }
  const { component, path } = props;

  return <Route path={path} component={component}/>
};

store.dispatch(fetchAuthenticated())
.then(() => {
    render(
    <Provider store={store}>
      <Router 
      history={history}
      >
        <Switch>
          <Route exact path='/' component={Root}/> 
          <Route 
          path='/account-dragons' 
          component={AccountDragons} />
          <AuthRoute
           path='/redirect-to-account-dragons'
           component={RedirectToAccountDragons}
           />
        </Switch>
      </Router> 
    </Provider>,
    document.getElementById("root")
  );
});





