import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export default function PrivateRoutes({ children }) {
  const isAuth = useSelector((store) => {
    console.log("isAuth",store.authreducer.isAuth);
    return store.authreducer.isAuth;
  });


  const location = useLocation();
  // console.log(location);
  if (!isAuth) {
    return <Navigate to={"/login"} state={location.pathname} replace />;
  }

  return children;
}