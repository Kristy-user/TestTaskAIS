import React, { useState } from 'react';

import search from 'assets/icons/search.svg';
import styled from 'styled-components';

const SearchStyle = styled.div`
  position: relative;
  border-style: none;

  & #search {
    margin-left: 20px;
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    background-color: #f9f9fb;
    border-style: none;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    box-shadow: 0px 8px 40px rgba(130, 130, 141, 0.08);
    padding: 17px 43px 17px 38px;
    border: 1px solid #f9f9fb;
    &::-webkit-input-placeholder {
      color: #c6c6c6;
    }
    &:active,
    :focus-visible {
      outline: none;
      border: 1px solid #009cb4;
    }
  }
  &:before {
    position: absolute;
    content: '';
    background: url(${search}) no-repeat center;
    background-size: contain;
    width: 20px;
    height: 20px;
    top: 14px;
    left: 30px;
    z-index: 10;
  }
`;

interface SearchFieldProps {
  className: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  value: string;
  placeholderName: string;
}

const SearchField: React.FC<SearchFieldProps> = (props) => {
  return (
    <SearchStyle className={props.className}>
      <label htmlFor="search"></label>
      <input
        placeholder={props.placeholderName}
        type="text"
        id="search"
        onChange={props.onChange}
        value={props.value}
      ></input>
    </SearchStyle>
  );
};
export default SearchField;
