import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
 *{
  font-family: 'Manrope', sans-serif;
  padding: 0;
  margin: auto;
  list-style-type: none;
  box-sizing: border-box;
  text-decoration: none;
  color: #231F20;
  &::before, &::after {
    box-sizing: border-box;
  }
   }
a {
    outline: none;
    text-decoration: none;
    background-color: transparent;
    color: inherit;
  }

  a:active,
  a:hover {
    outline: 0;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    color: inherit;
    font: inherit;
    margin: 0;
  }

  button,
  input {
    border: none;
    overflow: visible;
    background-color: inherit;
  }
  
  input {
    line-height: normal;
  }
  `;
