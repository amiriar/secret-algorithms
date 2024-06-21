const { Router } = require("express");
const generalController = require("./modules/user/general.controller");

const mainRouter = Router();

// main data
mainRouter.get("/api", generalController.api);
mainRouter.get("/bit256", generalController.bit256);
mainRouter.get("/bit512", generalController.bit512);
mainRouter.get("/jwt", generalController.jwt);

module.exports = mainRouter;
