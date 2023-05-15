import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { authCurrentThunk } from 'redux/user/user-operations';
import { useAuth } from 'hooks/useAuth';

import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

import { Loader } from './Loader/Loader';
import CalendarPage from 'pages/CalendarPage/CalendarPage';
import ChoosedMonth from './ChoosedMonth/ChoosedMonth';
import ChoosedDay from './ChoosedDay/ChoosedDay';

const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const WelcomePage = lazy(() => import('../pages/HomePage/WelcomePage'));
const UserPage = lazy(() => import('../pages/AccountPage/AccountPage'));
const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
const Canban = lazy(() => import('../pages/Canban/Canban'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(authCurrentThunk());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Suspense>
      <Routes>
        <Route path="/welcome" index element={<WelcomePage />} />
        <Route
          path="/login"
          element={
            <RestrictedRoute
              redirectTo={`/calendar`}
              component={<LoginPage />}
            />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo={`/calendar`}
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/"
          element={
            <PrivateRoute redirectTo="/welcome" component={<MainPage />} />
          }
        >
          <Route path="account" element={<UserPage />} />
          <Route path="canban" element={<Canban />} />
          <Route path="calendar" element={<CalendarPage />}>
            <Route path="month/:currentMonth" element={<ChoosedMonth />} />
            <Route path="day/:currentDay" element={<ChoosedDay />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};
