import React from 'react';
import styled from 'styled-components';
import Button from "../Components/Button";


const SubmitWindowStyle = styled.div`
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

const SubmitWindow = (props: {type:string, setModal:(value:boolean)=>void})  => {
  if (props.type === 'refreshData') {
    return (
      <SubmitWindowStyle>
        <p>Ваши данные были успешно обновлены ✅</p>
        <Button type="button" className="save" text="Ок" onClick={() => props.setModal(false)}/>
      </SubmitWindowStyle>
    );
  } else {
    return (
    <SubmitWindowStyle>
      <p> ✅</p>
      <Button type="button" className="save" text="Ок" onClick={() => props.setModal(false)}/>
    </SubmitWindowStyle>
    )
  }
};

export default SubmitWindow;
