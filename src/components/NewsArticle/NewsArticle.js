import React from 'react';
import './NewsArticle.css';

const NewsArticle = (props) => {
  return (
    <article>
      <img src={props.article.img} alt="news article" />
      <h2>{props.article.headline}</h2>
      <p>{props.article.description}</p>
      <div className="article-link-btn"><a className="article-link" href={props.article.url}>Link to Article →</a></div>
    </article>
  )
};

export default NewsArticle;
