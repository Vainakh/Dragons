import React from 'react';
import { render } from 'react-dom';
import Generation from './components/Generation';
import Dragon from './components/Dragon';
import './index.css';
import  { createStore } from 'redux';
import { Provider } from 'react-redux';
import { generationReducer } from './reducers';
import { generationActionCreator } from './actions/generation';

const store = createStore(generationReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => console.log('store.getState', store.getState()));

fetch('http://localhost:3000/generation')
.then(response => response.json())
.then(json => {
  store.dispatch(generationActionCreator(json.generation))
})

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

