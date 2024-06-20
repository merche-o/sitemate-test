// src/actions.js
import axios from 'axios';
import {BASE_API_URL, API_KEY} from '../../config';
import NewsModel from '../models/newsModel';

export const fetchArticlesRequest = () => ({
  type: 'FETCH_ARTICLES_REQUEST',
});

export const fetchArticlesSuccess = articles => ({
  type: 'FETCH_ARTICLES_SUCCESS',
  payload: articles,
});

export const fetchArticlesFailure = error => ({
  type: 'FETCH_ARTICLES_FAILURE',
  payload: error,
});

export const fetchArticles = query => {
  return dispatch => {
    dispatch(fetchArticlesRequest());

    const url = `${BASE_API_URL}/everything?q=${encodeURIComponent(
      query,
    )}&apiKey=${API_KEY}`;

    axios
      .get(url)
      .then(response => {
        const articles = response.data.articles.map(article =>
          NewsModel.fromAPI(article),
        );
        dispatch(fetchArticlesSuccess(articles));
      })
      .catch(error => {
        dispatch(fetchArticlesFailure(error.message));
      });
  };
};
