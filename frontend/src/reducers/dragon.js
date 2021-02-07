// import {DRAGON}  from '../actions/types';
const DRAGON = require('../actions/types');
const fetchStates = require('./fetchStates');


const DEFAULT_DRAGON = {
  dragonId: '',
  generationId: '',
  nickname: '',
  birthdate: '',
  traits: []
};

const dragon = (state = DEFAULT_DRAGON, action) => {
  switch(action.type) {
    case DRAGON.FETCH:
      return { ...state, status: fetchStates.fetching };
    case DRAGON.FETCH_ERROR:
      return { ...state, status: fetchStates.error, message: action.message }
    case DRAGON.FETCH_SUCCESS:
      return { ...state, status: fetchStates.success, ...action.dragon }
    default:
      return state;
    }
  };
  
  module.exports = dragon;