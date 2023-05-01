import { useAuth } from "hooks/useAuth";
import { Navigate,  } from "react-router";

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  console.log("🚀 ~ file: PrivateRoute.js:6 ~ PrivateRoute ~ isRefreshing:", isRefreshing)
  console.log("🚀 ~ file: PrivateRoute.js:6 ~ PrivateRoute ~ isLoggedIn:", isLoggedIn)
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  console.log("🚀 ~ file: PrivateRoute.js:9 ~ shouldRedirect:", shouldRedirect)
  
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}