const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res
      .status(403)
      .json({ message: "No token provided.", isLoggedIn: false });
  }

  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) {
      return res
        .status(401)
        .json({ message: "Failed to authenticate token.", isLoggedIn: false });
    }

    // If token is verified, save the decoded user info to request for use in other routes
    req.userId = decoded.id;
    req.username = decoded.user_name;
    req.email = decoded.email;
    next();
  });
};

module.exports = verifyToken;
