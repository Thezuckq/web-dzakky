import React, { Component } from "react";
import "./App.css";
import Header from "./header";
import routes from "./config/routes";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// const isUserAuthenticated = false;

// const PrivateRoute = ({ component: Component, ...rest}) => {
//   return (
//     <Route
//       {...rest}
//       render={() =>{
//         if (isUserAuthenticated) {
//           return <Component />;
//         }
//         return <Redirect to="Login" />
//       }}
//     />
//   );
// };

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        {routes.map((route) => {
          if (route.isPublic) {
            return (
              <Route
                path={route.path}
                component={route.component}
                key={route.path}
              />
            );
          }
          // return (
          //   <PrivateRoute
          //     path={route.path}
          //     component={route.component}
          //     key={route.path}
          //   />
          // );
        })}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
