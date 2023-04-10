import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export default function PrivatrRoutes({ children }) {
  const isAuth = useSelector((store) => {
    console.log(store);
    return store.authReducer.isAuth;
  });

  const location = useLocation();
  console.log(location);
  if (!isAuth) {
    return <Navigate to={"/login"} state={location.pathname} replace />;
  }

  return children;
}
