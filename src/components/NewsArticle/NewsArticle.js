import React from 'react';
import './NewsArticle.css';

const NewsArticle = (props) => {
  return (
    <article key={props.article.id}>
      <img src={props.article.img} alt="news article" />
      <h2>{props.article.headline}</h2>
      <p>{props.article.description}</p>
      <a href={props.article.url}>Link to Article</a>
    </article>
  )
};

export default NewsArticle;
