import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import routes from "../Routes";
import { getClientStore } from "../store";

const App = () => {
  return (
    <Provider store={getClientStore()}>
      <Router>
        {routes.map(route => (
          <Route {...route} />
        ))}
      </Router>
    </Provider>
  );
};

ReactDOM.hydrate(<App />, document.getElementById("root"));
