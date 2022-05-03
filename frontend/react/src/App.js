import { Switch } from "react-router-dom";

import MainPage from "./pages/main-page/MainPage";
import Header from "./components/header/Header";
import DetailsPage from "./pages/details-page/DetailsPage";
import "./App.scss";
import LoginPage from "./pages/login-page/LoginPage";
import RegisterPage from "./pages/register-page/RegisterPage";
import ForgotPasswordPage from "./pages/forgot-password/ForgotPasswordPage";
import { PublicRoute } from "./router/PublicRoute";
import { useSelector } from "react-redux";
import { PrivateRoute } from "./router/PrivateRoute";
import ProfilePage from "./pages/profile-page/ProfilePage";
import UserAdvertisiment from "./pages/user-advertisiment/UserAdvertisiment";

function App() {
  const {token} = useSelector((state) => state.user);
  return (
    <div className="App">
        <Header />
        <Switch>
          <PublicRoute exact={true} path="/" token={token}>
            <MainPage/>
          </PublicRoute>
          <PublicRoute exact={true} path="/details/:id" token={token}>
            <DetailsPage/>
          </PublicRoute>
          <PublicRoute exact={true} token={token} path="/login">
            <LoginPage/>
          </PublicRoute>
          <PublicRoute exact={true} token={token} path="/register">
            <RegisterPage/>
          </PublicRoute>
          <PublicRoute exact={true} token={token} path="/forgot-password">
            <ForgotPasswordPage/>
          </PublicRoute>
          <PrivateRoute exact={true} token={token} path="/profile">
            <ProfilePage/>
          </PrivateRoute>
          <PrivateRoute exact={true} token={token} path="/my-advertisiment">
            <UserAdvertisiment/>
          </PrivateRoute>
        </Switch>
    </div>
  );
}

export default App;
