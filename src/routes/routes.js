import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import LayOut from '../Layout/LayOut';
import Home from '../pages/home';
import LogIn from '../pages/log-in';
import Error from '../pages/404';
import PrivateLayouts from '../Layout/PrivateLayouts';


// const PrivateRoutes = ({ component: Component, ...rest }) => (
//     <Route {...rest} element={(props) => (
//             true
//             ? <Component {...props} />
//             : <Navigate to='/signin' />
//     )} />
// );

const RoutesComponent = () => (
  <BrowserRouter>
    <LayOut>
      <Routes>
        <Route exact path="/login" element={<LogIn />} />
        <Route exact path="/" element={<Home />}  />
        <Route path="*" element={<Error/>} />
      </Routes>
    </LayOut>
  </BrowserRouter>
);

export default RoutesComponent;
