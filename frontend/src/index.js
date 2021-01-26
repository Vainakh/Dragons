import React from 'react';
import { render } from 'react-dom';
import './index.css';
import  { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import Root from './components/Root';
import { fetchAuthenticated } from './actions/account';

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

store.dispatch(fetchAuthenticated())
.then(() => {
    render(
    <Provider store={store}>
      <Root/>
    </Provider>,
    document.getElementById("root")
  );
});





