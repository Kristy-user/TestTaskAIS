import React, { useState } from 'react';
import styled from 'styled-components';
import UserBar from './Components/UserBar';
import logo from 'assets/icons/logo.svg';
import { useNavigate } from 'react-router-dom';
import calendar from 'assets/icons/calendar.svg';
import SearchField from '../../../Components/SearchField';

const HeaderStyle = styled.div`
  display: flex;
  margin: 16px auto;
  .logo {
    width: 170px;
    height: 80px;
    background: url(${logo}) no-repeat center;
    background-size: contain;
    margin: 0;
    cursor: pointer;
  }
  .search-field {
    max-width: 270px;
    max-height: 48px;
    margin-left: 12px;
  }
  .calendar {
    background: url(${calendar}) no-repeat center;
    border-radius: 50%;
    background-color: #f9f9fb;
    padding: 8px;
    background-size: initial;
    width: 40px;
    height: 40px;
    margin-right: 2.5%;
    &:hover {
      background-color: #01b8d4;
      cursor: pointer;
    }
  }
`;

const Header = () => {
  const [inputText, setInputText] = useState('');
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  const navig = useNavigate();

  return (
    <HeaderStyle>
      <div className={'logo'} onClick={()=>navig('/')}></div>
      <div className="calendar"></div>
      <UserBar />
    </HeaderStyle>
  );
};

export default Header;
