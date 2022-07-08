import React, { useState } from 'react';
import styled from 'styled-components';
import mainImage from 'assets/images/mainImage.jpg';
import SearchField from '../../../Components/SearchField';
import Button from '../../../Components/Button';
import News from './Components/News/News';
import Questions from './Components/Questions/Questions';
import Footer from '../Footer/Footer';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Register from './Components/Register/Register';
import Documents from './Components/Documents/Documents';

const MainContentStyle = styled.div`
  #preview {
    display: flex;
    justify-content: space-between;
  }
  .title {
    margin-right: 10%;
  }
  & h1 {
    letter-spacing: 3px;
    margin-top: 10%;
    font-weight: 700;
    font-size: 48px;
    line-height: 66px;
  }
  & p {
    letter-spacing: 0.5px;
    margin-top: 3.5%;
    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
    color: #676a71;
  }
  & span {
    color: #009cb4;
  }
  & p:nth-child(4) {
    margin-top: 0;
  }
  .image-wrapper {
    min-width: 505px;
    min-height: 502px;
    margin-top: 64px;
    margin-left: 16px;
    & .main-image {
      max-width: 100%;
      object-fit: cover;
    }
  }
  .search-block {
    position: relative;
    margin-top: 8.5%;
    margin-left: 0;
    width: 450px;
  }
  & .search-register {
    box-shadow: 0px 8px 40px rgba(130, 130, 141, 0.08);
    display: inline-block;
    width: 70%;
    & #search {
      border-radius: 5px 0 0 5px;
    }
  }
  & .button-register {
    position: absolute;
    display: inline-block;
    padding: 15px 27.5px;
    right: 0;
    border-radius: 0 5px 5px 0;
  }
  .news {
    padding: 20px 0;
  }
`;

const MainContent = () => {
  const [inputText, setInputText] = useState('');
  const inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  const searchRegister = () => console.log('search');
  const { pathname, hash } = useLocation();

  const handleScroll = () => {
    const element = document.getElementById(hash.replace('#', ''));

    setTimeout(() => {
      window.scrollTo({
        behavior: element ? 'smooth' : 'auto',
        top: element ? element.offsetTop : 0,
      });
    }, 100);
  };

  useEffect(() => {
    handleScroll();
  }, [pathname, hash]);
  return (
    <MainContentStyle>
      <section id="preview">
        <div className="title">
          <h1>РЕЕСТР ПРОГРАММНОГО ОБЕСПЕЧЕНИЯ</h1>
          <p>
            Единый реестр программ для электронных вычислительных машин и баз
            данных
          </p>
          <p>
            Включено ПО в реестр: <span>13 438</span>
          </p>
          <p>
            Правообладателей: <span>4 272</span>
          </p>
          <div className="search-block">
            <SearchField
              className={'search-register'}
              onChange={inputHandler}
              value={inputText}
              placeholderName={'Искать по реестру'}
            />
            <Button
              type="button"
              className="button-register"
              text={'Искать'}
              onClick={searchRegister}
            />
          </div>
        </div>
        <div className="image-wrapper">
          <img className="main-image" src={mainImage} />
        </div>
      </section>
      <section id={'register'}>
        <Register />
      </section>
      <section id={'news'}>
        <News />
      </section>
      <section id={'documents'}>
        <Documents />
      </section>
      <section id={'questions'}>
        <Questions />
      </section>
    </MainContentStyle>
  );
};

export default MainContent;
