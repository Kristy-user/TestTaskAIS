import React, { useState } from 'react';

import styled from 'styled-components';

const StyledModalWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 120%;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  left: 0;
  top: 0;
  z-index: 1000;
  border-radius: 8px;
  background: rgba(36, 44, 72, 0.3);

  .modalWindow {
    margin: 0 auto;
    max-width: 550px;

    border-radius: 6px;
    color: #1e212a;
    background-color: #fff;
  }
  button {
    margin-right: 0;
  }
`;

export const ModalContext = React.createContext<(value: any) => void>(
  () => {}
);

interface Props {
  children: JSX.Element | JSX.Element[];
}

const GlobalModalProvider: React.FC<Props> = ({ children }) => {
  const [modalContent, setModalContent] = useState<boolean>(false);

  return (
    <React.Fragment>
      {!!modalContent && (
        <StyledModalWrapper>
          <div className={'modalWindow'}>{modalContent}</div>
        </StyledModalWrapper>
      )}
      <ModalContext.Provider value={setModalContent}>
        {children}
      </ModalContext.Provider>
    </React.Fragment>
  );
};

export default GlobalModalProvider;
