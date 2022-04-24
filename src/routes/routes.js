import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import LayOut from '../Layout/LayOut';
import Home from '../pages/home';
import LogIn from '../pages/log-in';


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
        <Route exact path="/home" element={<Home />} />
        <Route path="*" element={<h1>Error</h1>} />
      </Routes>
    </LayOut>
  </BrowserRouter>
);

export default RoutesComponent;
