import { Redirect, Route, RouteProps } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface CustomRouteData extends RouteProps {
  isPrivate?: boolean;
  isGroup?: boolean;
  component: React.ComponentType;
}

export const CustomRoute: React.FC<CustomRouteData> = ({
  isPrivate = false,
  component: Component,
  isGroup = false,
  ...rest
}) => {
  const { token, user } = useAuth();
  const isJoinedGroup = user ? !!user.group : false;
  const isAuthenticated = !!token;

  return (
    <Route
      {...rest}
      render={() => {
        return isPrivate === isAuthenticated ? (
          isGroup === isJoinedGroup ? (
            <Component />
          ) : (
            <Redirect to={isGroup ? "/join-group" : "/dashboard"} />
          )
        ) : (
          <Redirect to={isPrivate ? "/login" : "/dashboard"} />
        );
      }}
    />
  );
};
