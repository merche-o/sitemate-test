// src/actions.js
import axios from 'axios';
import {BASE_API_URL, API_KEY} from '../../config';
export const setPosts = news => ({
  type: 'SET_NEWS',
  payload: news,
});

export const setSearchQuery = query => ({
  type: 'SET_SEARCH_QUERY',
  payload: query,
});

export const fetchNews = () => {
  return dispatch => {
    axios
      .get(BASE_API_URL + 'everything&apiKey=' + API_KEY)
      .then(response => {
        dispatch(setPosts(response.data));
      })
      .catch(error => {
        console.error(error);
      });
  };
};
