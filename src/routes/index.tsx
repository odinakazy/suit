import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import PublicRoutes from "./public-routes";
import { RouteKeys } from "./constant";
import PageNotFound from "../pages/pageNotFound";
const SignIn = lazy(() => import("../pages/auth/sign-in"));
const SignUp = lazy(() => import("../pages/auth/sign-up"));
const ResetPassword = lazy(() => import("../pages/auth/reset-password"));
const NewPassword = lazy(() => import("../pages/auth/new-password"));
const Otp = lazy(() => import("../pages/auth/otp"));
import Logo from "../assets/suitrohlogo.png";

const AppRoutes = () => {
  return (
    <>
      <Suspense
        fallback={
          <div className="fixed h-full w-full flex justify-center items-center">
            <img src={Logo} className="animate-pulse" alt="logo" />
          </div>
        }
      >
        <Routes>
          {/** public routes */}
          <Route element={<PublicRoutes />}>
            <Route path="/" element={<SignIn />} />

            <Route path={RouteKeys.SIGNUP} element={<SignUp />} />
            <Route path={RouteKeys.RESETPASSWORD} element={<ResetPassword />} />
            <Route path={RouteKeys.OTP} element={<Otp />} />
            <Route path={RouteKeys.NEWPASSWORD} element={<NewPassword />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default AppRoutes;
