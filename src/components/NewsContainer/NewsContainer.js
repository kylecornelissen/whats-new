import React from 'react';
import './NewsContainer.css';
import NewsArticle from '../NewsArticle/NewsArticle.js';

const NewsContainer = (props) => {
  return (
    <section>
    {props.articles.map(article => {
      return <NewsArticle article={article} />
    })};
    </section>
  )
};

export default NewsContainer;
