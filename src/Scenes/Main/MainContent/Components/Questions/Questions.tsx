import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { questions } from '../../../../../assets/mockData';
import plus from 'assets/icons/plus.svg';
import x from 'assets/icons/x.svg';

const QuestionsStyle = styled.div`
  display: grid;
  margin-left: 0;
  grid-template-columns: 1fr 1.3fr;
  align-items: start;
  margin-bottom: 40px;
  padding-top: 40px;
  & .block-title {
    text-align: left;
    margin: 0;

    & h3 {
      letter-spacing: 1.5px;
      font-weight: 700;
      font-size: 36px;
      line-height: 49px;
    }
  }
  & .block-questions {
    text-align: left;
    padding-top: 3px;
  }
  & .main-item {
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #4d4d4f;
    letter-spacing: 0.7px;
    position: relative;
    padding-left: 33px;
    margin-bottom: 20px;
    
    > ol {
      max-height: 500px;
      transition: max-height 0.3s ease-in-out;
    }

    & .icon {
      position: absolute;
      top: 0;
      left: -2px;
      background-size: contain;
      width: 22px;
      height: 22px;
      background: url(${x}) no-repeat center;
      cursor: pointer;
      transition: transform 0.3s ease-in;
      transform: rotate(0);
    }
    &.hidden .icon {
      transform: rotate(45deg);
    }
    &.hidden > ol {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease-in-out;
    }

    & ol {
      list-style: none;
      counter-reset: li;
      transition: max-height 0.3s ease-in-out;

      & li {
        margin: 25px 0;
        font-weight: 500;
        font-size: 18px;
        line-height: 27px;
        color: #676a71;
        margin-bottom: 10px;

        &:before {
          counter-increment: li;
          content: counters(li, '.') '. ';
        }
      }
    }
  }
`;

const Questions = () => {
  const changeVisible = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.closest('LI')?.classList.toggle('hidden');
  };
  return (
    <QuestionsStyle>
      <div className="block-title">
        <h3>Вопрос-ответ</h3>
      </div>
      <div className="block-questions">
        {questions.map((item, i) => (
          <ul className="main-list" key={i}>
            <li className="main-item hidden">
              <div className={'icon'} onClick={(e) => changeVisible(e)}></div>
              {item.title}
              <ol className={''}>
                {item.list.map((subitem, i) => (
                  <li key={i}>{subitem}</li>
                ))}
              </ol>
            </li>
          </ul>
        ))}
      </div>
    </QuestionsStyle>
  );
};

export default Questions;
