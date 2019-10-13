import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

export const render = (req, store, routes) => {
  const content = renderToString(
    <Provider store={store}>
      <Router location={req.url} context={{}}>
        {routes.map(route => (
          <Route {...route} />
        ))}
      </Router>
    </Provider>
  );
  return `
      <html>
        <head></head>
        <body>
          <div id='root'>${content}</div>
          <script>
            window.context = {
              state: ${JSON.stringify(store.getState())}
            }
          </script>
          <script src='index.js'></script>
        </body>
      </html>
    `;
};
