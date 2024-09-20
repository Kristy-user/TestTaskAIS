import * as React from 'react';
import styled from 'styled-components';
import arrowLeft from 'assets/icons/arrow-left.svg';
import {Link, useNavigate} from 'react-router-dom';
import { Formik, Form } from 'formik';
import {useDispatch} from "react-redux";
import {Errors, User} from "../../../types/types";
import fakeServerAPI from "../../../api/fakeServerAPI";
import {isLogIn, updateUserInfo} from "../../../store/actions/user";
import FormikInput from "../../../Components/FormikInput";
import FormikSelect from "../../../Components/FormikSelect";
import Button from "../../../Components/Button";

const RegistrationStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  margin-bottom: 20px;
  .logIn {
    min-width: 37%;
    & form {
      margin: 0;
    }
  }
  & h3 {
    font-weight: 700;
    font-size: 36px;
    line-height: 49px;
    letter-spacing: 1.5px;
    color: #231f20;
    padding: 14px 0;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 26px;
  }
  .save {
    padding: 17px 0;
    margin: auto;
    width: 100%;
  }
  .footer-login{
    text-align: center;
    margin-top: 20px;
  }
  .link-color {
    letter-spacing: 0.8px;
    margin: 20px auto;
    color: #009cb4;
    text-decoration: underline;
    padding-bottom: 20px;
  }
  
  .link {
    margin-top: 26px;
    margin-left: 0;
    position: relative;
    & a {
      font-weight: 500;
      font-size: 18px;
      line-height: 25px;
      padding-left: 40px;
      letter-spacing: 1px;
      &:before {
        position: absolute;
        content: '';
        width: 24px;
        height: 24px;
        left: 0px;
        top: -2px;
        background: url(${arrowLeft});
      }
    }
  }
`;

interface FormValuesTypes {
  password: string;
  email:string;
  name: string;
  surname: string;
  surname2: string;
  town: string;
  country: string;
  phone: string;
}
const Registration = () => {

  const dispatch = useDispatch();
  const navig = useNavigate();
  const validate = (values: FormValuesTypes) => {
    const errors: Partial<FormValuesTypes> = {};
    let isError = false;
    Object.keys(values).forEach((key) => {
      if (!values[key as keyof FormValuesTypes]) {
        errors[key as keyof FormValuesTypes] = 'Обязательно';
        isError = true;
      }
    });
    if (isError) return errors;
  };

  const handleRegistrationSubmit = async (formValues: FormValuesTypes) => {
    try {
      const createUserResponse = await fakeServerAPI.post('/register', {
        email: formValues.email,
        password: formValues.password,
      })
      const userId = createUserResponse.data.user.id;

      let {name, surname,surname2,email,phone,town,country} = formValues;
      const userInfo: Partial<User>= {
        email,
        name,
        surname,
        surname2,
        town,
        country,
        phone,
        id: userId
      }

      dispatch(isLogIn(true)); // Set login status
      dispatch(updateUserInfo(userInfo)); // Update user info in the store

      navig('/'); // Navigate to the home page or desired route
    } catch (error) {
      console.error('Login failed:', error); // Handle errors appropriately
    }
  };
  return (
    <RegistrationStyle>
      <div className="link">
        <Link to="/">Главная</Link>
      </div>
      <div className="logIn">
        <h3>Создать аккаунт</h3>
        <Formik
          initialValues={{
            name: '',
            password: '',
            email:'',
            surname:'',
            surname2:'',
            town:'Минск',
            country:'Беларусь',
            phone:''
          }}
          validate={validate}
          onSubmit={handleRegistrationSubmit}
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
              placeholder="Введите отчество"
              label="Отчество"
              type="text"
            />
          <FormikInput
            name="email"
            placeholder="Введите email"
            label="Email"
            type="email"
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
            name="city"
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
          </div>
          <div className="line">
            <Button type="submit" className="save" text="Сохранить"/>
          </div>
        </Form>
        </Formik>
        </div>
      <div className={'footer-login'}>
      <p>У вас уже есть аккаунт?</p>
      <Link className="link-color" to="/authorization">
        Нажмите сюда чтобы авторизоваться
      </Link>
      </div>
    </RegistrationStyle>
  );
};

export default Registration;
