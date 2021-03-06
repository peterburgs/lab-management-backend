const http = require("http");
const port = process.env.PORT || 3001;
const app = require("./app");

// Config server
const server = http.createServer(app);
server.listen(port);

if (!server) {
  console.log("*LOG: Server fails");
} else {
  console.log("*LOG: Server is running on port " + port);
}
