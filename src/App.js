/* eslint-disable */
import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./header";
import routes from "./config/routes";

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
    <div className="main-container">
      <BrowserRouter>
        <Header />
        <Switch>
          {routes.map((route) => {
            // eslint-disable-line
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
    </div>
  );
};

export default App;
