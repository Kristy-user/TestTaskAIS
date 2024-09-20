import React, {useContext, useEffect, useState} from 'react';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import {isLogIn, updateUserInfo} from '../../../store/actions/user';
import {userLogInSelector, userSelector} from '../../../store/selectors/userSelector';
import Button from '../../../Components/Button';
import FormikInput from '../../../Components/FormikInput';
import { Link, useNavigate } from 'react-router-dom';
import { Errors } from '../../../types/types';
import fakeServerAPI from "../../../api/fakeServerAPI";
import ErrorWindow from "../../../HOC/ErrorWindow";
import {ModalContext} from "../../../HOC/GlobalModalProvider";

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
  const openModal = useContext(ModalContext);

  interface LoginFormValues {
    email: string;
    password: string;
  }
  const validate = (values:LoginFormValues) => {
    const errors: Errors = {
      name: '',
      password: '',
    };
    let isError = false;

    if (isError) return errors;
  };

  const handleLoginSubmit = async (formValues: LoginFormValues) => {
    try {
      const loginResponse = await fakeServerAPI.post('/login', {
        email: formValues.email,
        password: formValues.password,
      });

      const userInfo = loginResponse.data.user;

      dispatch(isLogIn(true)); // Set login status
      dispatch(updateUserInfo(userInfo)); // Update user info in the store

      navig('/'); // Navigate to the home page or desired route
    } catch (error:any) {
      openModal(
        <ErrorWindow
          textError={error.response && error.response.data ? error.response.data : error.message ? error.message : 'An unknown error occurred.'}
          setModal={openModal}
        />
      );
      console.error('Login failed:', error); // Handle errors appropriately
    }
  };

  return (
    <LogStyle>

      <Formik
        initialValues={{
          password: '',
          email:'',
          remember: true,
        }}
        validate={validate}
        onSubmit={handleLoginSubmit}
      >
        <Form>
          <FormikInput
            name="email"
            placeholder="Введите email"
            label="Email"
            type="email"
          />
          <FormikInput
            name="password"
            placeholder="Введите пароль"
            label="Пароль"
            type="password"
          />
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
        <Link className="link-color" to="/registration">
          Нажмите сюда чтобы создать
        </Link>
      </div>
    </LogStyle>
  );
};

export default Login;
