import React from 'react';
import { render } from 'react-dom';
import Generation from './components/Generation';
import Dragon from './components/Dragon';
import './index.css';
import  { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { generationReducer } from './reducers';

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  generationReducer,
  {},
  composeEnhancers(applyMiddleware(thunk))
);

render(
  <Provider store={ store }>
    <div>
      <h2>Dragon Stack</h2>
      <Generation/>
      <Dragon/>
    </div>
  </Provider>,
  document.getElementById("root")
);

