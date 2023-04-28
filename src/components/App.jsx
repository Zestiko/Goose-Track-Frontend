import { Suspense, lazy } from 'react';
import { Route, Routes,BrowserRouter } from 'react-router-dom';
import { AuthNav } from './AuthNavigate/AuthNavigate';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import MainPage from './MainPage/MainPage';
import KillMe from './KillMe';


// import UserPage from './AccountPage/accountPage';

const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));


export const App = () => {
  return (
    <>
      <Suspense>
        <Routes>
          <Route index element={<MainPage />} />
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
          {/* <Route
            path="/calendar/month"
            element={
              <PrivateRoute redirectTo="/login" component={<AuthNav />} />
            }

          /> */}

        </Routes>
      </Suspense>

      {/* <MainPage>
        <Routes>
          <Route path="" element={<KillMe />} />
        </Routes>
      </MainPage> */}
    </>
  );
};
// ЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮ
// не уверен в маршрутах - Проверь. специально закоментарил ранишний код
// ЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮ

// import { Suspense, lazy } from 'react';
// import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';
// import { AuthNav } from './AuthNavigate/AuthNavigate';
// import { PrivateRoute } from './PrivateRoute';
// import { RestrictedRoute } from './RestrictedRoute';
// import MainPage from './MainPage/MainPage';
// import KillMe from './KillMe';

// const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
// const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
// const HomePage = lazy(() => import('../pages/HomePage/HomePage'));

// export const App = () => {
//   return (

//       <Suspense fallback={<div>Loading...</div>}>
//         <Routes>
//           <Route path="/" element={<Navigate to="/home" replace={true} />} />
//           <Route path="/home" element={<HomePage />} />
//           <Route
//             path="/login"
//             element={
//               <RestrictedRoute redirectTo="/main" component={<LoginPage />} />
//             }
//           />
//           <Route
//             path="/register"
//             element={
//               <RestrictedRoute
//                 redirectTo="/main"
//                 component={<RegisterPage />}
//               />
//             }
//           />
//           <PrivateRoute path="/main" redirectTo="/login" element={<MainPage />}>
//             <Route path="/" element={<KillMe />} />
//           </PrivateRoute>
//         </Routes>
//       </Suspense>

//   );
// };