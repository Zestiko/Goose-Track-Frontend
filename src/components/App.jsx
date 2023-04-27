import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import UserPage from "./AccountPage/accountPage";



const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));

export const App = () => {
  return (

    <><Routes>
      <Route path="" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes><>
        <UserPage />
      </></>
  )

};
