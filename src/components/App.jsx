import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthNav } from './AuthNavigate/AuthNavigate';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

// import UserPage from './AccountPage/accountPage';

const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));


export const App = () => {
  return (
    <>
      <Suspense>
        <Routes>
          <Route index element={<HomePage />} />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/" component={<LoginPage />} />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute redirectTo="/" component={<RegisterPage />} />
            }
          />
          <Route
            path="/calendar/month"
            element={
              <PrivateRoute redirectTo="/login" component={<AuthNav />} />
            }
          />
        </Routes>
      </Suspense>
    </>
  );
};
