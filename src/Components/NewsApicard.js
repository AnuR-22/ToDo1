// src/utils/newsApi.js

import axios from 'axios';

const API_KEY = 'YOUR_NEWS_API_KEY';
const BASE_URL = 'https://newsapi.org/v2/top-headlines';

export const fetchNews = async () => {
  try {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=API_KEY`);
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};
