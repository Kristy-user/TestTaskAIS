import React, {FC} from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
// import { userSelector } from 'store/selectors/userSelector';
import MainLayouts from '../Layouts/MainLayouts';
import Authorization from '../Scenes/Authorization/Authorization';
import CreateAccount from '../Scenes/Authorization/Components/CreateAccount';
import MainInfo from '../Scenes/Authorization/Components/MainInfo';
import OtherMenu from '../Scenes/Authorization/Components/OtherMenu';
import MainContent from '../Scenes/Main/MainContent/MainContent';
import { userSelector } from '../store/selectors/userSelector';
import Registration from "../Scenes/Authorization/Components/Registration";

const RootRouter:FC = () => {
  return (
    <Routes>
      <Route path={'/'} element={<MainLayouts />}>
        <Route path={'authorization'} element={<Authorization />} />
        <Route path={'registration'} element={<Registration/>}/>
        <Route path={'register'} element={<CreateAccount />}>
          <Route path={'private-data'} element={<MainInfo />} />
          <Route path={'notification'} element={<OtherMenu />} />
          <Route path={'registers'} element={<OtherMenu />} />
          <Route path={'metadata'} element={<OtherMenu />} />
          <Route path={'secure'} element={<OtherMenu />} />
          <Route path={'downloads'} element={<OtherMenu />} />
        </Route>
        <Route path={''} element={<MainContent />} />
      </Route>
    </Routes>
  );
};

export default RootRouter;
