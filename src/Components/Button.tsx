import React from 'react';

import styled from 'styled-components';

const ButtonStyle = styled.button`
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.01em;
  background: #009cb4;
  border-radius: 5px;
  color: #ffffff;
  cursor: pointer;
  &:hover,
  :active {
    background: #01b8d4;
  }
`;

interface ButtonProps {
  className: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
  type: 'submit' | 'button';
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <ButtonStyle
      type={props.type}
      className={props.className}
      onClick={props.onClick}
    >
      {props.text}
    </ButtonStyle>
  );
};
export default Button;
