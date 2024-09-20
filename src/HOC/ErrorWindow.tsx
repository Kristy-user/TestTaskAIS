import React from 'react';
import styled from 'styled-components';
import Button from "../Components/Button";


const ErrorWindowStyle = styled.div`
  background-color: ${(props) => props.theme.headerBackGroundColor};
  color: ${(props) => props.theme.appBackGroundColor};
  font-size: 18px;
  padding: 30px;
  display: flex;
  align-content: center;
  flex-direction: column;

  button {
    align-self: center;
    padding: 5px 8px;
    margin-top: 15px;
  }
`;

const ErrorWindow = (props: {textError:string, setModal:(value:boolean)=>void})  => {
    return (
      <ErrorWindowStyle>
        <p>{props.textError}</p>
        <Button type="button" className="save" text="Ок" onClick={() => props.setModal(false)}/>
      </ErrorWindowStyle>
    );
};

export default ErrorWindow;
