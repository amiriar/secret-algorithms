const autoBind = require("auto-bind");
const path = require("path");
const crypto = require("crypto");

class GeneralController {
  constructor() {
    autoBind(this);
  }
  async api(req, res, next) {
    try {
      const generateApiKey = (length) => {
        return crypto.randomBytes(length).toString("hex");
      };
      return res.status(200).json({ secret: generateApiKey(20) });
    } catch (error) {
      next(error);
    }
  }
  async bit256(req, res, next) {
    try {
      const generateRandomKey = (bits) => {
        return crypto.randomBytes(bits / 8).toString("hex");
      };
      const key256 = generateRandomKey(256);
      res.json({ key: key256 });
    } catch (error) {
      next(error);
    }
  }
  async bit512(req, res, next) {
    try {
      const generateRandomKey = (bits) => {
        return crypto.randomBytes(bits / 8).toString("hex");
      };
      const key512 = generateRandomKey(512);
      res.json({ key: key512 });
    } catch (error) {
      next(error);
    }
  }
  async jwt(req, res, next) {
    try {
      const generateJwtSecret = (length) => {
        return crypto.randomBytes(length).toString("hex");
      };
      return res.status(200).json({ secret: generateJwtSecret(32) });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = new GeneralController();
