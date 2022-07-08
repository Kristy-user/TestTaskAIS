import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from 'GlobalStyles/globalStyles';
import GlobalModalProvider from './HOC/GlobalModalProvider';
import RootRouter from './Route/RootRouter';
import { Provider } from 'react-redux';
import { store } from 'store/initStore';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalModalProvider>
          <GlobalStyles />
          <RootRouter />
        </GlobalModalProvider>
      </BrowserRouter>
    </Provider>
  );
};
export default App;
