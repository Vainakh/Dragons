import { combineReducers } from 'redux';
import generation from './generation';
import account from './account';
import dragon from './dragon';
import accountDragons from './accountDragons';
import accountInfo from './accountInfo';

export default 
  combineReducers({ 
    account, 
    dragon, 
    generation, 
    accountDragons,
    accountInfo
});
