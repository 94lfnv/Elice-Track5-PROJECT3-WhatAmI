import express from 'express';
import db from './src/models/index';
import dotenv from 'dotenv';
import cors from 'cors';
import sequelize from './src/config/sequelize';
import flash from 'connect-flash';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import sessionMysql from 'express-mysql-session';

//**Passport */
import passport from 'passport';

//**Router */
import { communityRouter } from './src/routes';
import { userRouter } from './src/routes/user.router';
import { reviewAuthRouter } from './src/routes/review.route';
import { reviewCommentAuthRouter } from './src/routes/revComment.route';
//**middleware */
import errorMiddleware from './src/middlewares/error';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: '*', credentials: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));

import passportConfig from './src/utils/passport.js';

import jwt from 'jsonwebtoken';
app.use(passport.initialize());
passportConfig();

// app.get(
//   '/kakao',
//   passport.authenticate('kakao-login', {
//     session: false,
//     failureRedirect: '/login',
//   }),
//   (req, res) => {
//     if (req.user) {
//       const secretKey = process.env.JWT_SECRET;
//       const user = req.user;
//       const userId = user.userId;
//       const role = user.role;
//       const token = jwt.sign({ userId, role }, secretKey, {
//         expireIn: process.env.JWT_EXPIRES,
//       });
//       res
//         .status(200)
//         .redirect(
//           `/login/success?token=${token}&userId=${userId}&role=${role}`,
//         );
//     }
//   },
// );

sequelize.sync({ force: false });

app.use(userRouter);
app.use(reviewAuthRouter);
app.use(reviewCommentAuthRouter);
app.use('/communities', communityRouter);
app.use(errorMiddleware);

app.listen(process.env.SEVER_PORT, () =>
  console.log(`✅ Listening to port 5001`),
);
