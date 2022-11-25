import { userService } from '../services/user.service.js';
import jwt from 'jsonwebtoken';
import passport from 'passport';
import Joi from 'joi';

const postUserValidation = Joi.object({
  nickname: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  // confirmPassword: Joi.string().required(),
});

class userController {
  static async register(req, res, next) {
    try {
      // const { nickname, email, password } = req.body;
      const { nickname, email, password } =
        await postUserValidation.validateAsync(req.body);

      const newUser = await userService.addUser({
        nickname,
        email,
        password,
      });

      if (newUser.errorMessage) {
        throw new Error(newUser, errorMessage);
      }
      res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  }
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;

      const user = await userService.findUser({ email, password });
      if (user.errorMessage) {
        throw new Error(user.errorMessage);
      }
      res.status(201).send(user);
    } catch (error) {
      next(error);
    }
  }
  static async userList(req, res, next) {
    try {
      const users = await userService.users();
      if (users.errorMessage) {
        throw new Error(users.errorMessage);
      }
      res.status(200).send(users);
    } catch (error) {
      next(error);
    }
  }

  static async current(req, res, next) {
    try {
      // jwt 이용 id로 사용자 찾기
      const userId = req.currentUserId;

      const user = await userService.getUser({ userId });

      if (user.errorMessage) {
        throw new Error(user.errorMessage);
      }
      res.status(200).send(user);
    } catch (error) {
      next(error);
    }
  }

  static async edit(req, res, next) {
    try {
      // const userId = req.currentUserId,
      const userId = req.params.userId;
      console.log(userId);

      // 수정할 사용자 정보
      const { nickname, password } = req.body ?? null;

      const updatedUser = await userService.setUser({
        userId,
        nickname,
        password,
      });

      if (updatedUser.errorMessage) {
        throw new Error(updatedUser.errorMessage);
      }

      res.status(200).json(updatedUser);
    } catch (error) {
      next(error);
    }
  }
}

export { userController };
