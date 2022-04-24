import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LayOut from '../Layout/LayOut';
import Home from '../pages/home';
import LogIn from '../pages/log-in';
import ProtectedRoutes from './protected.routes';
import PublicRoutes from './public.routes';

const isAuth = true;
const RoutesComponent = () => (
  // <LayOut>
  //   <Routes>
  //     {isAuth ? (
  //       <Route exact path="/home" element={<Home />} />
  //     ) : (
  //       <>
  //         <Route exact path="/login" element={<LogIn />} />
  //         <Route path="*" element={<h1>Error</h1>} />
  //       </>
  //     )}
  //   </Routes>
  // </LayOut>

  <Router>


  <Routes>
    {/** Protected Routes */}
    {/** Wrap all Route under ProtectedRoutes element */}
    <Route path="/" element={<ProtectedRoutes />}>
      <Route path="/" element={<LayOut />}>
        {/* <Route path="/" element={<Navigate replace to="dashboard" />} /> */}
        <Route path="/home" element={<Home />} />
        {/* <Route path="dashboard" element={<Dashboard />} /> */}
        {/* <Route
          path="tabs"
          element={<Tabs props={{ userName: 'Bikash web' }} />}
        >
          <Route path="/tabs" element={<Navigate replace to="tab1" />} />
          <Route path="tab1" element={<Tab1 />} />
          <Route path="tab2" element={<ProtectedRoutes roleRequired="USER" />}>
            <Route path="/tabs/tab2" element={<Tab2 />} />
          </Route>
          <Route path="tab3" element={<Tab3 />} />
        </Route> */}
        {/* <Route path="settings" element={<Settings />} />
        <Route path="dynamic-form" element={<DynamicForm />} />
        <Route
          path="users"
          element={<Users extraItem="test extra item from router" />}
        /> */}
        {/* <Route path="users/:userId" element={<SingleUser />} />
        <Route path="users/new" element={<NewUser />} /> */}
      </Route>
    </Route>

    {/** Public Routes */}
    {/** Wrap all Route under PublicRoutes element */}
    <Route path="/" element={<PublicRoutes />}>
      <Route path="/login" element={<LogIn />} />
    </Route>

    {/** Permission denied route */}
    {/* <Route path="/denied" element={<PermissionDenied />} />
    <Route path="/404" element={<PermissionDenied />} /> */}
  </Routes>
  </Router>

);

export default RoutesComponent;
