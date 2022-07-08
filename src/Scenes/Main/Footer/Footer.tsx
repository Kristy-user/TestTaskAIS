import React, { useState } from 'react';
import styled from 'styled-components';

import logo from 'assets/icons/logo.svg';
import { Link } from 'react-router-dom';

const FooterStyle = styled.footer`
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  .top-footer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: 0;
    text-align: left;
    & span {
      padding-top: 10px;
      display: block;
      color: inherit;
    }
    & h3 {
      font-weight: 700;
      font-size: 18px;
      line-height: 25px;
      color: #231f20;
      margin-bottom: 20px;
      letter-spacing: 0.8px;
    }
    & .licence p &.dev {
      font-weight: 600;
      font-size: 16px;
      line-height: 22px;
      color: #4d4d4f;
      margin-top: 20px;
    }
    & .nav,
    .text,
    span {
      font-weight: 500;
      font-size: 14px;
      line-height: 150%;
      color: #676a71;
    }
    & .logo {
      width: 170px;
      height: 40px;
      background: url(${logo}) no-repeat top;
      background-size: contain;
      margin: 0;
      margin-bottom: 20px;
    }
    & .address {
      font-weight: 500;
      font-size: 14px;
      line-height: 19px;
      color: #a8aaae;
    }
    & .tex,
    .contacts,
    .navigation,
    .licence {
      margin: 20px 0;
      padding-right: 10px;
    }
    & .developer {
      margin-top: -75px;
      margin-left: 0;
    }
    & .licence {
      max-width: 27%;
      margin-right: 85px;
    }
    & .navigation {
      margin-right: 70px;
      & nav > ul > li {
        margin-bottom: 6px;
        & a:hover {
          color: #009cb4;
        }
      }
    }
    & .tex {
      max-width: 25%;
      margin-right: 1px;
    }
    & .contacts {
      max-width: 25%;
      & > span {
        padding-top: 5px;
      }
      & > a {
        color: #009cb4;
        font-weight: 500;
        font-size: 14px;
        line-height: 19px;
        text-decoration: underline;
      }
    }
  }
  .bottom-footer > p {
    margin: 45px auto;
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    color: #c6c6c6;
  }
`;

const Footer = () => {
  return (
    <FooterStyle>
      <div className="top-footer">
        <div className={'licence'}>
          <div className={'logo'}></div>
          <p className={'text'}>
            Открытое акционерное общество «Реестр ПО» начало практическую
            деятельность с 1 марта 2014 г
          </p>
        </div>
        <div className={'navigation'}>
          <h3>Информация</h3>
          <nav>
            <ul>
              <li>
                <Link className={'nav'} to="/#register">
                  Реестры
                </Link>
              </li>
              <li>
                <Link className={'nav'} to="/#news">
                  Новости
                </Link>
              </li>
              <li>
                <Link className={'nav'} to="/">
                  Документы
                </Link>
              </li>
              <li>
                <Link className={'nav'} to="/#questions">
                  Вопросы
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="tex">
          <h3>Техническая поддержка</h3>
          <p className="text">
            Ежедневно с 8.00 до 19.00, за исключением выходных (суббота,
            воскресенье) и праздничных дней.
          </p>
          <div className={'tex-contacts'}>
            <span>+375 25 111 22 33</span>
            <span>+375 29 222 44 55</span>
            <span>ReestrPOsupport@mail.ru</span>
          </div>
        </div>
        <div className="contacts">
          <h3>Контакты</h3>
          <span>+375 33 112 22 45</span>
          <span>+375 29 222 44 88</span>
          <span>ReesrtPO@mail.ru</span>
          <span>220004 г. Минск, ул. Карла Маркса, 38</span>
          <Link to="/tex">Связаться с поддержкой</Link>
        </div>
        <div className={'developer'}>
          <p className={'dev'}>Разработчик</p>
          <p className={'text'}>ОАО «Агентство сервисизации и реинжиниринга»</p>
          <p className={'address'}>Минск, улица Клары Цеткин, 24</p>
        </div>
      </div>
      <div className="bottom-footer">
        <p>© Copyright 2022 — ОАО «РеестрПО». Все права защищены.</p>
      </div>
    </FooterStyle>
  );
};

export default Footer;
