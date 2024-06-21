const express = require("express");
const dotenv = require("dotenv");
const swaggerConfig = require("./src/config/swagger.config");
const NotFoundHandler = require("./src/common/exception/notFound.handler");
const AllExceptionHandler = require("./src/common/exception/all-exception.handler");
const cookieParser = require("cookie-parser");
const rateLimit = require("express-rate-limit");
const mainRouter = require("./src/app.routes");
const crypto = require("crypto")

dotenv.config();

async function main() {
  const app = express();
  const port = process.env.PORT;
//   require("./src/config/mongoDB.config");

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser(process.env.COOKIE_SECRET_KEY));

  app.use(mainRouter);

  swaggerConfig(app);

  NotFoundHandler(app);
  AllExceptionHandler(app);

  app.listen(port, () => {
    console.log(`Server is running on: http://localhost:${port}`);
  });
}

main();
