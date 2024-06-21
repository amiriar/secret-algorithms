const createHttpError = require("http-errors");
const JWT = require("jsonwebtoken");
const { ACCESS_TOKEN_SECRET_KEY } = require("../constant/constans");
const UserModel = require("../../modules/user/user.model");
function getToken(headers,res) {
  const cookies = headers?.cookie?.split(';').reduce((acc, cookie) => {
    const [key, value] = cookie.split('=').map(c => c.trim());
    acc[key] = value;
    return acc;
  }, {});

  const token = cookies?.accessToken;
  if (!token) {
    throw createHttpError.Unauthorized("حساب کاربری شناسایی نشد وارد حساب کاربری خود شوید");
  }
  return token;
}

function VerifyAccessToken(req, res, next) {
  try {
    const token = getToken(req.headers,res);
    JWT.verify(token, ACCESS_TOKEN_SECRET_KEY, async (err, payload) => {
      try {
        if (err) throw createHttpError.Unauthorized("وارد حساب کاربری خود شوید");

        // Extract email and username from the payload
        const { email, username } = payload || {};

        // Find user by email or username
        const query = {};
        if (email) query.email = email;
        else if (username) query.username = username;

        // Query the database for the user
        const user = await UserModel.findOne(query, { password: 0 });

        if (!user) throw createHttpError.Unauthorized("حساب کاربری یافت نشد");

        // Attach user to the request object
        req.user = user;
        return next();
      } catch (error) {
        next(error);
      }
    });
  } catch (error) {
    next(error);
  }
}



module.exports = {
  VerifyAccessToken,
  getToken,
};
