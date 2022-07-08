import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { news } from '../../../../../assets/mockData';
import Button from '../../../../../Components/Button';
import NewsItem from './NewsItem';
const NewsStyle = styled.div`
  display: flex;
  flex-direction: column;
  & h3 {
    font-weight: 700;
    font-size: 36px;
    line-height: 49px;
    margin-bottom: 40px;
    letter-spacing: 1.5px;
    margin-left: 0;
  }
  .news-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: start;
    flex-grow: 0;
    row-gap: 40px;
    column-gap: 28px;
  }
  .button-news {
    padding: 15.5px 75px;
    margin: 40px auto;
    align-self: center;
  }
`;

const News = () => {
  const [count, setCount] = useState(6);
  let newsToShow = news.slice(0, count);

  return (
    <NewsStyle>
      <h3>Новости реестра</h3>
      <div className={'news-wrapper'}>
        {newsToShow.slice(0, count).map((item) => (
          <NewsItem key={item.id} className={'news-item'} news={item} />
        ))}
      </div>
      {count === 6 ? (
        <Button
          type="button"
          className={'button-news'}
          text="Показать все"
          onClick={() => setCount(news.length)}
        />
      ) : (
        <Button
          type="button"
          className={'button-news'}
          text="Свернуть"
          onClick={() => setCount(6)}
        />
      )}
    </NewsStyle>
  );
};

export default News;
