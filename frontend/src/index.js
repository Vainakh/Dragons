import React from 'react';
import { render } from 'react-dom';
import Generation from './components/Generations';
import Dragon from './components/Dragon';
import './index.css';
import  { createStore } from 'redux';

const DEFAULT_GENERATION =  {
    generationId: '',
    expiration: ''
  };

const generationReducer = () => {
  return { generation: DEFAULT_GENERATION }
};

const store = createStore(generationReducer+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
console.log('store', store);
console.log('store.getState', store.getState());
render(
  <div>
    <h2>Dragon Stack</h2>
    <Generation/>
    <Dragon/>
  </div>,
  document.getElementById("root")
);

