import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  news: [],
  searchQuery: '',
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_POSTS':
      return {...state, posts: action.payload};
    case 'SET_SEARCH_QUERY':
      return {...state, searchQuery: action.payload};
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
