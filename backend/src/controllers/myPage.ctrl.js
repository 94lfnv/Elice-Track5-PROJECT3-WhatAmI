import { myPageService } from '../services/myPage.service';

class myPageController {
  static async getMyCommunities(req, res, next) {
    try {
      // const { page, size } = req.query;
      const userId = req.currentUserId;
      const getCommunities = await myPageService.UserToCommunity({
        userId,
      });

      return res.status(200).send(getCommunities);
    } catch (error) {
      next(error);
    }
  }

  static async getLikedCommunities(req, res, next) {
    try {
      const userId = req.currentUserId;
      const likedCommunities = await myPageService.getMyCommunities({ userId });
      return res.status(200).send(likedCommunities);
    } catch (error) {
      next(error);
    }
  }

  // 고민
  static async getCommunityPosts(req, res, next) {
    try {
      const userId = req.currentUserId;
      const communityId = req.params.communityId;
      const myPosts = await myPageService.getMyCommunitiesAndPosts({
        userId,
        communityId,
      });

      return res.status(200).send(myPosts);
    } catch (error) {
      next(error);
    }
  }

  static async getPosts(req, res, next) {
    try {
      const userId = req.currentUserId;
      const communityId = req.params.communityId;
      const findCommunityId = await myPageService.findCommunity({
        communityId,
      });
      return res.status(200).json(findCommunityId);
    } catch (error) {
      next(error);
    }
  }
}

export { myPageController };
