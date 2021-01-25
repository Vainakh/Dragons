import { combineReducers } from 'redux';
import generation from './generation';
import account from './account';
import dragon from './dragon';

export default combineReducers({ account, dragon, generation});
