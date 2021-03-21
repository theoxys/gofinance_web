import { Redirect, Route, RouteProps } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface CustomRouteData extends RouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

export const CustomRoute: React.FC<CustomRouteData> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { token } = useAuth();
  const isAuthenticated = !!token;

  return (
    <Route
      {...rest}
      render={() => {
        return isPrivate === isAuthenticated ? (
          <Component />
        ) : (
          <Redirect to={isPrivate ? "/login" : "/dashboard"} />
        );
      }}
    />
  );
};
