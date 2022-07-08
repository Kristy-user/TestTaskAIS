import React, { useState } from 'react';
import styled from 'styled-components';
import { News } from '../../../../../types/types';
import calendar from 'assets/icons/calendar-small.svg';
const ArticleStyle = styled.article`
  margin: 0 auto;
  .img-wrapper {
    max-width: 370px;
    max-height: 220px;
    & img {
      filter: drop-shadow(0px 8px 40px rgba(130, 130, 141, 0.08));
      border-radius: 5px;
      max-width: 100%;
      object-fit: cover;
    }
  }
  h5 {
    margin-top: 20px;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 0.5px;
    cursor: pointer;
    &:hover {
      color: ;
    }
  }
  .date {
    position: relative;
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    color: #a8aaae;
    padding-left: 34px;
    letter-spacing: 0.1px;
    margin-bottom: 12px;
    &::before {
      position: absolute;
      content: '';
      left: 3px;
      width: 18px;
      height: 19px;
      background: url(${calendar}) no-repeat center;
      background-size: inherit;
    }
  }
  .text {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #676a71;
  }
`;

interface NewsItemProps {
  className: string;
  news: News;
  key: number;
}

const NewsItem: React.FC<NewsItemProps> = ({ className, news }) => {
  let { id, title, date, text, image } = news;

  return (
    <ArticleStyle className={className}>
      <div className="img-wrapper">
        <img className="news-img" src={image} alt={`Фото к новости ${title}`} />
      </div>

      <h5>{title}</h5>
      <div>
        <p className={'date'}>{date}</p>
      </div>
      <p className={'text'}>{text}</p>
    </ArticleStyle>
  );
};

export default NewsItem;
