import { communityLikeService } from '../services/communityLike.service';

class communityLikeController {
  static async addLike(req, res, next) {
    try {
      const userId = req.currentUserId;
      const communityId = req.params.communityId;
      const findUser = await communityLikeService.addHeart({
        userId,
        communityId,
      });
      return res.status(201).json(findUser);
    } catch (error) {
      next(error);
    }
  }
}

export { communityLikeController };
