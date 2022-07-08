import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from 'Scenes/Main/Header/Header';
import Footer from '../Scenes/Main/Footer/Footer';
import { useDispatch } from 'react-redux';
import { loadingUsers } from '../store/actions/user';
import { user } from 'assets/mockData';

const MainPageWrapper = styled.div`
  max-width: 1200px;
  padding: 0 15px;
  margin: 0 auto;
`;

const MainLayouts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadingUsers(user));
  }, []);

  return (
    <MainPageWrapper>
      <Header />
      <Outlet />
      <Footer />
    </MainPageWrapper>
  );
};

export default MainLayouts;
