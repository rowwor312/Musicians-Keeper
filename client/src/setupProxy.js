const proxy = require("http-proxy-middleware");

module.exports = app => {
  app.use(proxy("/auth/", { target: "http://localhost:3001/"}));
  app.use(proxy("/login", { target : "http://localhost:3001/"}));
  app.use(proxy("/register",  { target: "http://localhost:3001/"}));
  app.use(proxy("/api/ping", { target: "http://localhost:3001/"}))
}