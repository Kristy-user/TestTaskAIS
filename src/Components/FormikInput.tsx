import React, { useState } from 'react';
import { useField } from 'formik';
import styled from 'styled-components';
import ok from 'assets/icons/check-circle.svg';
const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  margin-left: 0;
  align-self: flex-start;
  width: 100%;
  
  & .label {
    margin: 0;
    text-align: left;
    color: #676a71;
  }
  & input {
    background: #f6f6f9;
    border-radius: 5px;
    color: #231f20;
    display: block;
    margin-bottom: 28px;
    padding: 17px 18px;
    margin-left: 0;
    border: 1px solid #f6f6f9;
    position: relative;
    &::placeholder {
      color: #c6c6c6;
    }

    &:focus,
    :hover {
      outline: none;
      border: 1px solid #009cb4;
    }
  }
  .ico {
    position: relative;
    top: -60px;
    left: 45%;
    &:before {
      font-family: 'Font Awesome 5 Free';
      padding-right: 10px;
    }
    &.eye:before {
      content: '\f06e';
    }
    &.eye_slash:before {
      content: '\f070';
    }
    &:hover {
      cursor: pointer;
    }
  }
  .ok {
    border: 1px solid #00b247;
  }
  .ok-label {
    width: 24px;
    height: 24px;
    background: url(${ok}) center no-repeat;
    position: relative;
    left: 240px;
    top: -65px;
  }
  .error,
  .red {
    color: #e0371f;
    margin-left: 0;
  }
  .errorInput,
  .errorInput:focus,
  .errorInput:hover {
    margin-bottom: 10px;
    border: 1px solid #e0371f;
    color: #e0371f;
  }
`;
interface FormikProps {
  name: string;
  placeholder: string;
  label: string;
  type: string;
}

const FormikInput: React.FC<FormikProps> = (props) => {
  const [field, meta, helpers] = useField(props);
  const [passwordView, setPasswordView] = useState('password');
  let className = [];
  let labelClass = [];
  if (meta.error && meta.touched) {
    className.push('errorInput');
    labelClass.push('red');
  }
  if (props.name === 'password' || props.name === 'confirmPassword') {
    className.push('passwordInput');
  }
  if (!meta.error && meta.touched) {
    className.push('ok');
  }
  const handlerView = () =>
    passwordView === 'password'
      ? setPasswordView('text')
      : setPasswordView('password');
  return (
    <StyledInputWrapper>
      <label htmlFor={props.name} className={`label ${labelClass.join(' ')} `}>
        {props.label}
      </label>
      <input
        className={className.join(' ')}
        placeholder={props.placeholder}
        name={props.name}
        type={
          props.name === 'password' || props.name === 'confirmPassword'
            ? passwordView
            : props.type
        }
        onChange={field.onChange}
        onBlur={field.onBlur}
        value={field.value}
      />
      {props.name === 'password' || props.name === 'confirmPassword' ? (
        <div
          className={passwordView === 'password' ? 'ico eye_slash' : 'ico eye'}
          onClick={() => handlerView()}
        ></div>
      ) : null}
      {meta.touched && meta.error ? (
        <div className={'error'}>{meta.error}</div>
      ) : meta.touched && !meta.error ? (
        <div className=""></div>
      ) : null}
    </StyledInputWrapper>
  );
};

export default FormikInput;
