import React, { useState } from 'react';
import { Field, useField } from 'formik';
import styled from 'styled-components';
import { NavLink, Outlet } from 'react-router-dom';
import exit from 'assets/icons/exit.svg';
import userImg from 'assets/icons/defaultImg.svg';
import register from 'assets/icons/register.svg';
import secure from 'assets/icons/secure.svg';
import notification from 'assets/icons/reminder.svg';
import download from 'assets/icons/download.svg';
import metadata from 'assets/icons/metadata.svg';

const CreateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  .block-menu,
  .block-content {
    margin: 0;
  }
  .block-menu {
    /* min-width: 20%; */
    margin-right: 80px;
  }
  .block-content {
    min-width: 60%;
  }
  & h3 {
    font-weight: 700;
    font-size: 36px;
    line-height: 49px;
    letter-spacing: 1.5px;
    color: #231f20;
    margin: 64px 0 40px 0;
  }
  li {
    margin-left: 0;
    padding: 14px 0 22px 20px;
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    color: #676a71;
    letter-spacing: 1px;
    border: 1px solid #ededf4;
    border-style: solid;
    border-color: #ededf4;
    width: 85%;
    &:hover {
      border: 1px solid #009cb4;
      border-radius: 5px;
      & a {
        color: #009cb4;
        & img {
          filter: hue-rotate(280deg) saturate(41) brightness(80);
        }
      }
    }
  }
  & .icon {
    background-size: contain;
    width: 28px;
    height: 28px;
    margin-right: 14px;
    object-fit: contain;
    position: relative;
    top: 8px;
  }

  li > .active {
    color: #009cb4;
  }
  .exit > .active {
    color: red;
  }
  .exit:hover,
  .exit {
    color: red;
  }
`;

const CreateAccount = () => {
  return (
    <CreateWrapper>
      <div className={'block-menu'}>
        <h3>Личный кабинет</h3>
        <nav>
          <ul>
            <li>
              <NavLink className={'link'} to="private-data">
                <img className={'icon'} src={userImg} alt="Меню" />
                Мои данные
              </NavLink>
            </li>
            <li>
              <NavLink to="notification">
                <img className={'icon'} src={notification} alt="Меню" />
                Уведомления
              </NavLink>
            </li>
            <li>
              <NavLink to="registers">
                <img className={'icon'} src={register} alt="Меню" />
                Реестры
              </NavLink>
            </li>
            <li>
              <NavLink to="metadata">
                <img className={'icon'} src={metadata} alt="Меню" />
                Метаданные
              </NavLink>
            </li>
            <li>
              <NavLink to="secure">
                <img className={'icon'} src={secure} alt="Меню" />
                Безопасность
              </NavLink>
            </li>
            <li>
              <NavLink to="downloads">
                <img className={'icon'} src={download} alt="Меню" />
                Мои загрузки
              </NavLink>
            </li>
            <li className={'exit'}>
              <NavLink to="/">
                <img className={'icon'} src={exit} alt="Меню" />
                Выход
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className={'block-content'}>
        <Outlet />
      </div>
    </CreateWrapper>
  );
};

export default CreateAccount;
