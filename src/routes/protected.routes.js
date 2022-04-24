import React from 'react';

import { Navigate, Outlet } from 'react-router-dom';

const useAuth = () => {
  //get item from localstorage

  let user;

  const _user = localStorage.getItem('user');

  if (_user) {
    user = JSON.parse(_user);
    console.log('user', user);
  }
  if (user) {
    return {
      auth: true,
      role: user.role,
    };
  } else {
    return {
      auth: false,
      role: null,
    };
  }
};

const ProtectedRoutes = (props) => {
  const { auth, role } = useAuth();

  //if the role required is there or not
  if (props.roleRequired) {
    return auth ? (
      props.roleRequired === role ? (
        <Outlet />
      ) : (
          <h1>Denied</h1>
        // <Navigate to="/denied" />
      )
    ) : (
      <Navigate to="/login" />
    );
  } else {
    return auth ? <Outlet /> : <Navigate to="/login" />;
  }
};

export default ProtectedRoutes;
