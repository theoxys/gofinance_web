import { BrowserRouter, Redirect, Switch } from "react-router-dom";
import { DashboardPage } from "../pages/Dashboard";
import { ForgotPasswordPage } from "../pages/ForgotPassword";
import { LoginPage } from "../pages/Login";
import { RegisterPage } from "../pages/Register";
import { CustomRoute } from "./private.routes";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect from="/" to="/login" exact />
        <CustomRoute path="/login" component={LoginPage} />
        <CustomRoute path="/forgot-password" component={ForgotPasswordPage} />
        <CustomRoute path="/register" component={RegisterPage} />
        <CustomRoute path="/dashboard" component={DashboardPage} isPrivate />
      </Switch>
    </BrowserRouter>
  );
};
