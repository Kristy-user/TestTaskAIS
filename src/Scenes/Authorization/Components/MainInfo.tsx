import React, {useContext, useState} from 'react';
import {Field, Form, Formik, useField} from 'formik';
import styled from 'styled-components';
import {userLogInSelector, userSelector} from '../../../store/selectors/userSelector';
import {useDispatch, useSelector} from 'react-redux';
import userImg from 'assets/icons/defaultImg.svg';
import userPhoto from 'assets/images/user.jpg';
import userGuest from 'assets/images/user-guest.png';
import FormikInput from '../../../Components/FormikInput';
import Button from '../../../Components/Button';
import FormikSelect from '../../../Components/FormikSelect';
import {User} from '../../../types/types';
import {isLogIn, updateUserInfo} from '../../../store/actions/user';
import fakeServerAPI from "../../../api/fakeServerAPI";
import {useNavigate} from "react-router-dom";
import { ModalContext } from '../../../HOC/GlobalModalProvider';
import SubmitWindow from "../../../HOC/SubmitWindow";
import ErrorWindow from "../../../HOC/ErrorWindow";

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
    
    &.guest {
      border-radius: 50%;
      background: url(${userGuest}) no-repeat center;
      background-size: contain;
    }
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
      bottom:0;
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

interface FormValuesTypes {
  name: string;
  surname: string;
  surname2: string;
  town: string;
  country: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

const MainInfo = () => {
  const currentUser: Partial<User> = useSelector(userSelector);
  const isUserLogIn: boolean = useSelector(userLogInSelector);
  const dispatch = useDispatch();
  const navig = useNavigate();
  const openModal = useContext(ModalContext);

  let {name, surname, surname2, town, country, phone, email} =
    currentUser;

  const validate = (values: FormValuesTypes) => {
    const errors: Partial<FormValuesTypes> = {};
    let isError = false;
    Object.keys(values).forEach((key) => {
      if (!values[key as keyof FormValuesTypes]) {
        errors[key as keyof FormValuesTypes] = 'Обязательно';
        isError = true;
      }
    });
    if(values.password.length < 4){
      errors.password = "Пароль должен иметь не менее 4 символа"
    }
    if (values.confirmPassword && values.password !== values.confirmPassword) {
      errors.confirmPassword = 'Пароль не совпадает';
      isError = true;
    }

    if (isError) return errors;
  };

  const handleSaveButton = async (formValues: FormValuesTypes) => {
    let {name, surname, surname2, town, country, phone, password} = formValues;
    const updatedUser: Partial<User> = {name, surname,surname2, town, country,password, phone, email}
    try {
      const updateResponse = await fakeServerAPI
        .put(`/users/${currentUser.id}`, updatedUser)
      openModal(
        <SubmitWindow
          type={'refreshData'}
          setModal={openModal}
        />
      );
      formValues.password='';
    } catch (error: any ) {
      openModal(
        <ErrorWindow
          textError={error.response && error.response.data ? error.response.data : error.message ? error.message : 'An unknown error occurred.'}
          setModal={openModal}
        />
      );
      console.log('Update data failed:', error.response); // Handle errors appropriately
    }
  }

  if (!isUserLogIn) {
    return <MainInfoStyle>
      <div>
        <p>Для доступа к линому кабинету создайте аккаунт</p>
        <Button type="button" className="save" text="Создать аккаунт" onClick={()=> navig('/registration')}/>
      </div>

    </MainInfoStyle>
  }
  return (
    <MainInfoStyle>
      <div className="title">
        <div className={'photo guest'}></div>
      </div>
      <p>Основные данные</p>
      <Formik
        initialValues={{
          name: name || '',
          surname: surname || '',
          surname2: surname2 || '',
          town: town || 'Минск',
          country: country || 'Беларусь',
          phone: phone || '',
          password: '',
          confirmPassword:''
        }}
        validate={validate}
        onSubmit={handleSaveButton}
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
              name="surname2"
              placeholder="Введите Отчество"
              label="Отчество"
              type="text"
            />
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
              name="town"
              label="Город"
            />
            <FormikInput
              name="phone"
              placeholder="+375 XX XXX XXX"
              label="Мобильный телефон"
              type="text"
            />
            <FormikInput
              name="password"
              placeholder="Введите пароль"
              label="Пароль"
              type="password"
            />
            <FormikInput
              name="confirmPassword"
              placeholder="Повторите пароль"
              label="Подтверждение пароля"
              type="password"
            />
          </div>
          <div className="line">
            <Button type="submit" className="save" text="Обновить"/>
          </div>
        </Form>
      </Formik>
    </MainInfoStyle>
  );
};

export default MainInfo;
