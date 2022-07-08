import React, { useState } from 'react';
import { Field, Form, Formik, useField } from 'formik';
import styled from 'styled-components';
import { userSelector } from 'store/selectors/userSelector';
import { useDispatch, useSelector } from 'react-redux';
import userImg from 'assets/icons/defaultImg.svg';
import userPhoto from 'assets/images/user.jpg';
import FormikInput from '../../../Components/FormikInput';
import Button from '../../../Components/Button';
import FormikSelect from '../../../Components/FormikSelect';
import { User } from '../../../types/types';
import { updateUserInfo } from '../../../store/actions/user';
const MainInfoStyle = styled.div`
  margin-top: 134px;
  min-width: 100%;
  .title {
    min-width: 100%;
    position: relative;
    margin-bottom: 90px;

    &::before {
      position: absolute;
      content: '';
      width: 100%;
      top: 120px;
      height: 1px;
      background: #ededf4;
    }
  }
  p {
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 1px;
    margin-bottom: 20px;
  }
  h3 {
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;

    color: #4d4d4f;
  }
  h4 {
    display: inline;
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
    letter-spacing: 1px;
    color: #231f20;
    margin-left: 20px;
  }
  .photo {
    position: relative;
    top: 20px;
    display: inline-block;
    width: 64px;
    height: 64px;
    background: url(${userPhoto}) no-repeat center;
    background-size: cover;
  }
  .grid-field {
    min-width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    position: relative;
    &::after {
      position: absolute;
      content: '';
      width: 100%;
      top: 330px;
      height: 1px;
      background: #ededf4;
    }
  }
  .save {
    width: 38%;
    margin-top: 30px;
    padding: 17px 0;
  }
  .line {
    width: 100%;
    .input-line {
      display: flex;
      justify-content: space-between;
      margin: 0;
      & > input[type='password'] {
        margin-left: 20px;
      }
    }
  }
`;

const MainInfo = () => {
  const currentUser: User = useSelector(userSelector);
  const dispatch = useDispatch(updateUserInfo);
  let { name, surname, patronymic, town, country, phone, password } =
    currentUser;

  const validate = (values) => {
    const errors = {};
    let isError = false;
    Object.keys(values).forEach((key) => {
      if (!values[key]) {
        errors[key] = 'Обязательно';
        isError = true;
      }
    });
    if (values.confirmPassword && values.password !== values.confirmPassword) {
      errors.confirmPassword = 'Пароль не совпадает';
      isError = true;
    }

    if (isError) return errors;
  };

  return (
    <MainInfoStyle>
      <div className="title">
        <div className="photo"></div>
        <h4>Здравствуй, {name ? name : 'Гость'}!</h4>
      </div>
      <p>Основные данные</p>
      <Formik
        initialValues={{
          name: name || '',
          surname: surname || '',
          patronymic: patronymic || '',
          town: town || '',
          country: country || '',
          phone: phone || '',
          password: password || '',
        }}
        validate={validate}
        onSubmit={(formValues) => {
          dispatch(updateUserInfo);
          console.log(formValues, currentUser);
          dispatch;
        }}
      >
        <Form>
          <div className={'grid-field'}>
            <FormikInput
              name="name"
              placeholder="Введите имя"
              label="Имя"
              type="text"
            />
            <FormikInput
              name="surname"
              placeholder="Введите фамилию"
              label="Фамилия"
              type="text"
            />
            <FormikInput
              name="patronymic"
              placeholder="Введите отчество"
              label="Отчество"
              type="text"
            />{' '}
            <FormikSelect
              options={['Беларусь', 'Россия', 'Украина', 'Польша', 'Литва']}
              name="country"
              label="Страна"
            />
            <FormikSelect
              options={[
                'Минск',
                'Гомель',
                'Брест',
                'Витебск',
                'Могилев',
                'Гродно',
              ]}
              name="city"
              label="Страна"
            />
            <FormikInput
              name="phone"
              placeholder="+375 XX XXX XXX"
              label="Мобильный телефон"
              type="text"
            />
          </div>
          <div className="line">
            <h3>Пароль</h3>
            <div className="input-line">
              <FormikInput
                name="password"
                placeholder="Введите пароль"
                label="Новый пароль"
                type="password"
              />
              <div style={{ width: 40 }}></div>
              <FormikInput
                name="confirmPassword"
                placeholder="Повторите пароль"
                label="Подтверждение пароля"
                type="password"
              />
            </div>

            <Button type="submit" className="save" text="Сохранить" />
          </div>
        </Form>
      </Formik>
    </MainInfoStyle>
  );
};

export default MainInfo;
