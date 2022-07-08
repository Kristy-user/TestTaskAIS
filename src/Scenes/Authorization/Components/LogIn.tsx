import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { isLogIn } from 'store/actions/user';
import { userSelector } from 'store/selectors/userSelector';
import Button from 'Components/Button';
import { loadingUsers } from 'store/actions/user';
import { user } from 'assets/mockData';
import FormikInput from 'Components/FormikInput';
import { Link, useNavigate } from 'react-router-dom';
import { Errors } from 'types/types';

const LogStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0;
  min-width: 100%;

  .remember {
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: #a8aaae;
    top: 22px;
    position: relative;
  }
  .text-label {
    display: block;
    padding-left: 40px;
  }
  .log {
    margin-top: 20px;
    padding: 15.5px;
    margin-left: 0;
    width: 100%;
  }
  .footer-login {
    display: flex;
    flex-direction: column;
    & p {
      margin-top: 12px;
    }
    & .link-color {
      letter-spacing: 0.8px;
      margin: 20px auto;
      color: #009cb4;
      text-decoration: underline;
      padding-bottom: 20px;
      &:last-child {
        margin-top: 3px;
      }
    }
    & .add-auth {
      padding: 20px;
      width: 100%;
      border: 1px solid #ededf4;
      border-radius: 5px;
      margin-bottom: 20px;
      text-decoration: underline;
      &:hover {
        border-color: #009cb4;
        color: #009cb4;

        cursor: pointer;
      }
    }
  }
`;

const Login = () => {
  const dispatch = useDispatch();
  const navig = useNavigate();
  const currentUser = useSelector(userSelector);

  const validate = (values) => {
    const errors: Errors = {
      name: '',
      password: '',
    };
    let isError = false;
    if (values.name !== user.name) {
      errors.name = 'Имя не совпадает';
      isError = true;
    }

    if (values.password !== user.password) {
      errors.password = 'Неверный пароль';
      isError = true;
    }

    if (isError) return errors;
  };

  return (
    <LogStyle>
      <Formik
        initialValues={{
          name: '',
          password: '',
          remember: true,
        }}
        validate={validate}
        onSubmit={(formValues) => {
          console.log(formValues);
          dispatch(isLogIn(true));
          navig('/');
        }}
      >
        <Form>
          <FormikInput
            name="name"
            placeholder="Введите имя"
            label="Имя"
            type="text"
          />
          <FormikInput
            name="password"
            placeholder="Введите пароль"
            label="Пароль"
            type="password"
          />
          <label className="check">
            <Field name="remember" className="remember" type="checkbox" />
            <span className="text-label">
              Запомнить меня на этом компьютере{' '}
            </span>
          </label>
          <Button type="submit" className="log" text=" Вxoд" />
        </Form>
      </Formik>
      <div className={'footer-login'}>
        <Link className="link-color" to="#">
          Забыли свой пароль?
        </Link>
        <div className="add-auth">
          <Link to="#">Авторизация с использованием ЕС ИФЮЛ</Link>
        </div>
        <div className="add-auth">
          <Link to="#"> Авторизация с использованием МСИ</Link>
        </div>

        <p>У вас нет аккаунта?</p>
        <Link className="link-color" to="#">
          Нажмите сюда чтобы создать
        </Link>
      </div>
    </LogStyle>
  );
};

export default Login;
