const express = require("express");
const app = express();
import { render } from "./utils";
app.use(express.static("public"));
import { matchRoutes } from "react-router-config";
import routes from "../Routes";
import { getServerStore } from "../store";

app.get("*", (req, res) => {
  const store = getServerStore();

  const promises = [];

  const matchedRoutes = matchRoutes(routes, req.path);

  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      promises.push(item.route.loadData(store));
    }
  });

  Promise.all(promises).then(() => {
    res.send(render(req, store, routes));
  });
});

app.listen(3000, () => console.log("server running on port 3000"));
