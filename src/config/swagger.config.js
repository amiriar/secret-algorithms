const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
function swaggerConfig(app) {
  const swaggerDocument = swaggerJsDoc({
    swaggerDefinition: {
      openapi: "3.0.1",
      info: {
        title: "Persoanl important stuff",
        description:
          "this is personal project made to remove the pain of needing tokens and algorithms for things like jwt or... made by Amirreza Abdolrahimi using ExpressJS",
        version: "1.0.0",
      },
    },
    apis: [process.cwd() + "/src/modules/**/*.swagger.js"],
  });
  const swagger = swaggerUi.setup(swaggerDocument, {});
  app.use("/", swaggerUi.serve, swagger);
}
module.exports = swaggerConfig;
