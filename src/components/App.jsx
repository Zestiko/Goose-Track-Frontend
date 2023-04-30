import { Suspense, lazy, useEffect } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
// import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { authCurrentThunk } from 'redux/user/user-operations';
import ModalToggel from './ModalTogel/ModalToggel';


const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const UserPage = lazy(() => import('../pages/AccountPage/AccountPage'));
const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(authCurrentThunk());
  }, [dispatch]);
  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <Suspense>
        <Routes>
          <Route path="" index element={<HomePage />} />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/main" component={<LoginPage />} />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/main"
                component={<RegisterPage />}
              />
            }
          />
          <Route path="/main" element={<MainPage />}>
            <Route path="user" element={<UserPage />} />
            <Route
              path="calendar"
              element={
                <div>
                  <h1>CalendarPage</h1>
                  <Outlet />
                </div>
              }
            >
              <Route
                path="month/:currentDate"
                element={
                  <div>
                    <ModalToggel />
                  </div>
                }
              />
              <Route
                path="day/:currentDay"
                element={
                  <div>
                    <h1>ChooseDay</h1>
                  </div>
                }
              />
            </Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};
