import { userService } from '../services/user.service.js';
import jwt from 'jsonwebtoken';
import passport from 'passport';

class userController {
  static async register(req, res, next) {
    try {
      const { nickname, email, password, checkPassword } = req.body;
      const newUser = await userService.addUser({
        nickname,
        email,
        password,
        checkPassword,
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
  static async setImage(req, res, next) {
    try {
      const userId = req.params.userId;
      const image = req.file.path;
      // console.log(req.file);
      const PORT = process.env.SEVER_PORT;
      const profileImg = `http://localhost:${PORT}/${image}`;

      await userService.updateImage({
        profileImg,
        userId,
      });

      if (image === undefined) {
        res
          .status(400)
          .send({ success: false, message: '이미지가 존재하지 않습니다.' });
      }
      res.status(200).send({
        success: true,
        message: '이미지가 저장되었습니다.',
        userId,
        profileImg,
      });
    } catch (error) {
      next(error);
    }
  }
  static async select(req, res, next) {
    try {
      const userId = req.params.userId;
      const findUser = await userService.findUserId({ userId });
      res.status(200).send(findUser);
    } catch (error) {
      next(error);
    }
  }
}

export { userController };
