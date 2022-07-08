import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import arrowLeft from 'assets/icons/arrow-left.svg';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import Login from './Components/LogIn';

const AuthorizationStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  margin-bottom: 20px;
  .logIn {
    min-width: 37%;
    & form {
      margin: 0;
    }
  }
  & h3 {
    font-weight: 700;
    font-size: 36px;
    line-height: 49px;
    letter-spacing: 1.5px;
    color: #231f20;
    padding: 14px 0;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 26px;
  }
  .link {
    margin-top: 26px;
    margin-left: 0;
    position: relative;
    & a {
      font-weight: 500;
      font-size: 18px;
      line-height: 25px;
      padding-left: 40px;
      letter-spacing: 1px;
      &:before {
        position: absolute;
        content: '';
        width: 24px;
        height: 24px;
        left: 0px;
        top: -2px;
        background: url(${arrowLeft});
      }
    }
  }
`;

const Authorization = () => {
  return (
    <AuthorizationStyle>
      <div className="link">
        <Link to="/">Главная</Link>
      </div>
      <div className="logIn">
        <h3>Авторизация</h3>
        <Login />
      </div>
    </AuthorizationStyle>
  );
};

export default Authorization;
