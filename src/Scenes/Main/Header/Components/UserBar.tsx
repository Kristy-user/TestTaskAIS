import React, { useState } from 'react';
import styled from 'styled-components';
import reminder from 'assets/icons/reminder.svg';
import { Link } from 'react-router-dom';
import defaultImg from 'assets/images/defaultImg.svg';
import userImg from 'assets/images/user.jpg';
import { useDispatch, useSelector } from 'react-redux';
import {userLogInSelector, userSelector} from '../../../../store/selectors/userSelector';
import { isLogIn } from '../../../../store/actions/user';

const UserBarStyle = styled.div`
  display: flex;
  margin: 0;
  margin-right: 37px;

  .reminder-icon {
    position: relative;
    margin-right: 24px;
    width: 40px;
    height: 40px;
    padding: 8px;
    background-color: #f9f9fb;
    background: url(${reminder}) no-repeat center;
    border-radius: 50%;
    background-size: initial;

    &:hover {
      background-color: #01b8d4;
      cursor: pointer;
    }
  }

  .circle {
    position: absolute;
    left: 60%;
    top: -10%;
    font-weight: 500;
    font-size: 12px;
    width: 18px;
    height: 18px;
    color: white;
    background-color: #009cb4;
    text-align: center;
    border-radius: 50%;
  }

  .user-account {
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    cursor: pointer;
    position: relative;
    display: flex;
    max-width: 223px;
    padding: 13px 0;
    margin: 0 10px;


    & .user-photo {
      max-width: 48px;
      max-height: 48px;
      margin: 0 10px;
      border-radius: 50%;
      border: 1px solid #ededf4;
    }

    & .menu-list {
      position: absolute;
      display: flex;
      flex-direction: column;
      min-width: fit-content;
      top: 180%;
      border-radius: 5px;
      min-width: 125%;
      background-color: #009cb420;
      cursor: pointer;

      & .menu-item {
        padding: 10px;
        margin-left: 0;
        width: 100%;
        
        > a {
          text-wrap: nowrap;
        }

        &:hover {
          color: white;
          background-color: #01b8d4;
          border-radius: 5px;
        }
      }
    }

    & .user-menu {
      display: flex;

      &:hover {
        p {
          color: #01b8d4;
        }

        .arrow.down {
          border: solid #01b8d4;
          border-width: 0 3px 3px 0;
        }
      }
    }

    & .drop-down {
      position: relative;
      transition-property: opacity, visibility;

      & .arrow.down {
        border: solid black;
        border-width: 0 3px 3px 0;
        display: inline-block;
        padding: 3px;
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        margin-left: 8px;
        margin-bottom: 8px;
      }
    }
  }
`;

const UserBar = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const user = useSelector(userSelector);
  const isUserLoggedIn = useSelector(userLogInSelector)
  return (
    <UserBarStyle>
      <div className="reminder-icon">
        {user.notifications && isUserLoggedIn ? (
          <div className={'circle'}>{user.notifications.length || null}</div>
        ) : null}
      </div>

      <div className={'user-field'}>
        <div className={'user-icon'}></div>

        <div className={'user-account'}>
          <img
            className={'user-photo'}
            src={ defaultImg}
            alt="Фото"
          />{' '}
          {user && isUserLoggedIn ? (
            <div className={'drop-down'} onClick={() => setShow(!show)}>
              <div> {user.name + '  ' + user.surname}</div>
              {show ? (
                <ul className="menu-list" onMouseLeave={() => setShow(!show)}>
                  <li className="menu-item">
                    <Link to="register/private-data">Личный кабинет</Link>
                  </li>

                  <li
                    className="menu-item"
                    onClick={() => dispatch(isLogIn(false))}
                  >
                    <Link to="">Выход</Link>
                  </li>
                </ul>
              ) : null}
            </div>
          ) : (
            <div className={'drop-down'} onClick={() => setShow(!show)}>
              <div className="user-menu">
                <p>Вход в аккаунт</p>
                <i className="arrow down"></i>
              </div>
              {show ? (
                <ul className="menu-list" onMouseLeave={() => setShow(!show)}>
                  <li className="menu-item">
                    <Link to="authorization">Войти</Link>
                  </li>

                  <li className="menu-item">
                    <Link to="registration">Создать</Link>
                  </li>
                </ul>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </UserBarStyle>
  );
};

export default UserBar;
