import { User } from '../models/User.model';

class UserController {
  static async findByUserEmail({ email }) {
    const findUser = await User.findOne({
      where: {
        email: email,
      },
    });
    return findUser;
  }
  static async createUser({ newUser }) {
    const createdNewUser = await User.create(newUser);
    console.log('컨트롤러', createdNewUser);
    return createdNewUser;
  }
}

export { UserController };
