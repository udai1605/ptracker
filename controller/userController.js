const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const sendEmail = require("../utils/sendMail")
module.exports = {
  signUp: async (req, res, next) => {
    try {
      const { name, email, username, password } = req.body;
      userModel.findOne({ $or: [{ email }, { username }] }, (err, user) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "Error while checking for existing user" });
        } else if (user) {
          return res
            .status(400)
            .json({ message: "Email or Username already exists" });
        } else {
          bcrypt.hash(password, 10, (err, hash) => {
            if (err) {
              return res.status(500).json({ message: err });
            } else {
              const newUser = new userModel({
                name,
                email,
                username,
                password: hash,
              });

              newUser.save((err) => {
                if (err) {
                  return res
                    .status(500)
                    .json({ message: "Error while saving user to database" });
                } else {
                  return res
                    .status(200)
                    .json({ message: "User created successfully" });
                }
              });
            }
          });
        }
      });
    } catch (e) {
      next(e);
    }
  },

  signIn: async (req, res, next) => {
    try {
      const { usernameOrEmail, password } = req.body;
      userModel.findOne(
        {
          $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
        },
        (err, user) => {
          if (err) {
            return res.status(500).json({ message: "Error finding user" });
          } else if (!user) {
            return res.status(404).json({ message: "User not found" });
          } else {
            bcrypt.compare(password, user.password, (err, isMatch) => {
              if (err) {
                return res
                  .status(500)
                  .json({ message: "Error comparing passwords" });
              } else if (!isMatch) {
                return res.status(400).json({ message: "Incorrect password" });
              } else {
                const token = jwt.sign(
                  {
                    user_name: user.username,
                    email: user.email,
                    id: user._id,
                  },
                  process.env.SECRET,
                  {
                    expiresIn: "2 days", //2 days //todo add this in config
                  }
                );
                const response = {
                  user_id: user._id,
                  username: user.username,
                  email: user.email,
                  name: user.name,
                  token: token,
                  message: "Login successful",
                  isloggedIn: true,
                };
                return res.status(200).json(response);
              }
            });
          }
        }
      );
    } catch (e) {
      next(e);
    }
  },

  initiateResetPassword: async (req, res, next) => {
    try {
      const { email } = req.body;
      const user = await userModel.findOne({ email });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate a 6-digit OTP
      user.otp = otp;
      user.otpExpires = Date.now() + 20 * 60 * 1000; // OTP expires in 20 minutes
      await user.save();

      await sendEmail({
        email: user.email,
        subject: "Password Reset OTP",
        message: `Your OTP for password reset is: ${otp}. It will expire in 20 minutes.`,
      });

      res.status(200).json({ message: "OTP sent to email" });
    } catch (e) {
      next(e);
    }
  },

  verifyOtpAndResetPassword: async (req, res, next) => {
    try {
      const { email, otp, newPassword } = req.body;
      const user = await userModel.findOne({ email });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      if (user.otp !== otp || user.otpExpires < Date.now()) {
        return res.status(400).json({ message: "Invalid or expired OTP" });
      }

      const hashedPassword = await bcrypt.hash(newPassword, 10);
      user.password = hashedPassword;
      user.otp = null;
      user.otpExpires = null;
      await user.save();

      res.status(200).json({ message: "Password reset successfully" });
    } catch (e) {
      next(e);
    }
  },
};
