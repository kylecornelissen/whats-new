import React from 'react';
import './NewsContainer.css';
import NewsArticle from '../NewsArticle/NewsArticle.js';

const NewsContainer = (props) => {
  return props.articles.map(article => {
    return <NewsArticle article={article} />
  });
};

export default NewsContainer;
