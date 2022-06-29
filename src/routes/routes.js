import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import LogIn from '../pages/log-in';
import Error from '../pages/404';
import SignUp from '../pages/sign-up';
import RestorePass from '../pages/restore-pass';
import NewPost from '../pages/new-post';
import UpdateUser,{Foo} from '../pages/update-user';
import { Profile } from '../pages/Profile';
import {UserProfile} from '../pages/user-profile';
import ChangeProfilePicture from '../pages/change-profile-picture';
import {Notificacion} from '../pages/notificacion';
import LayOut from '../Layout/LayOut';



// const PrivateRoutes = ({ component: Component, ...rest }) => (
//     <Route {...rest} element={(props) => (
//             true
//             ? <Component {...props} />
//             : <Navigate to='/signin' />
//     )} />
// );


const RoutesComponent = () => (
  <BrowserRouter>
      <Routes>
        <Route path="*" element={<Error/>} />
        <Route exact path="/login" element={<LogIn />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/restorepass" element={<RestorePass />} />
        <Route exact path="/new-post" element={<NewPost />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/user-profile" element={<UserProfile />} />
        <Route exact path="/updateUser" element={<UpdateUser userId={4}/> } />
        <Route exact path="/notifications" element={<Notificacion/> } />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/change-profile-picture" element={<ChangeProfilePicture /> } />
        <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
);

export default RoutesComponent;