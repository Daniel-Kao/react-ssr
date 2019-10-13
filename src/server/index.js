const express = require("express");
const proxy = require("express-http-proxy");
import { render } from "./utils";
import { matchRoutes } from "react-router-config";
import routes from "../Routes";
import { getServerStore } from "../store";

const app = express();
app.use(express.static("public"));

app.use(
  "/todos",
  proxy("https://jsonplaceholder.typicode.com", {
    proxyReqPathResolver: function(req) {
      return "/todos" + req.url;
    }
  })
);

app.get("*", (req, res) => {
  const store = getServerStore();

  const promises = [];

  const matchedRoutes = matchRoutes(routes, req.path);

  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      promises.push(item.route.loadData(store));
    }
  });

  Promise.all(promises)
    .then(() => {
      res.send(render(req, store, routes));
    })
    .catch(err => console.log("server error"));
});

app.listen(3000, () => console.log("server running on port 3000"));
