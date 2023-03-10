import { CommunityPost } from '../models/CommunityPost.model';
import ApiError from '../utils/ApiError';
import { COMMUNITYPOST_PER_PAGE } from '../utils/Constant';
import sequelize from '../config/sequelize';
import { CommunityPostLike } from '../models/CommunityPostLike.model';

class communityPostService {
  static async createPost({ userId, communityId, images, description }) {
    const createPost = await CommunityPost.create({
      images,
      description,
      userId,
      communityId,
    });

    return createPost;
  }

  static async countAllPosts(communityId) {
    const communityPostCount = await CommunityPost.count({
      where: {
        communityId: communityId,
      },
    });

    if (!communityPostCount) {
      return 0;
    } else {
      return communityPostCount;
    }
  }

  static async communityPostCount(communityId) {
    const communityPostCount = await CommunityPost.count({
      where: {
        communityId: communityId,
      },
    });

    if (communityPostCount % COMMUNITYPOST_PER_PAGE === 0) {
      return communityPostCount / COMMUNITYPOST_PER_PAGE;
    } else {
      return Math.floor(communityPostCount / COMMUNITYPOST_PER_PAGE) + 1;
    }
  }

  static async selectCommunityPost(defaultPage, communityId, userId) {
    const selectedCommunityPost = await CommunityPost.findAll({
      where: { communityId: communityId },
      order: [['id', 'DESC']],

      offset: (defaultPage - 1) * COMMUNITYPOST_PER_PAGE,
      limit: COMMUNITYPOST_PER_PAGE,
    });
    if (!selectedCommunityPost) {
      throw ApiError.setBadRequest('No community available');
    }
    for (const communityPost of selectedCommunityPost) {
      communityPost.dataValues.likeCount = await CommunityPostLike.count({
        where: { communityPostId: communityPost.id },
      });
      communityPost.dataValues.likeStatus = await CommunityPostLike.count({
        where: {
          userId: userId,
          communityPostId: communityPost.id,
        },
      });
    }

    return selectedCommunityPost;
  }

  //???????????? ???????????? ????????? ??? ????????? ??????

  static async selectOneCommunityPost(id) {
    const [selectedCommunityPost, metadata] = await sequelize.query(
      `select CP.id, CP.images, CP.description, CP.communityId ,U.userId, U.nickname, U.profileImg from communityPosts as CP  inner join users as U on CP.userId = U.userId where CP.id=${id}`,
    );
    if (!selectedCommunityPost) {
      throw ApiError.setBadRequest('No community available');
    }

    return selectedCommunityPost[0];
  }

  static async updateCommunityPost({ images, description, id, userId }) {
    //db??????

    const updateCommunityPost = await CommunityPost.findOne({
      where: { id: id, userId: userId },
    });

    // db?????? ?????? ?????? ??????, ?????? ????????? ??????
    if (!updateCommunityPost) {
      const errorMessage = '????????? ?????? ????????????. ?????? ??? ??? ????????? ?????????.';
      return errorMessage;
    }
    // db??? ??????
    if (updateCommunityPost) {
      const updateCommunityPost = await CommunityPost.update(
        {
          images: images,
          description: description,
        },
        { where: { id: id, userId: userId } },
      );
      updateCommunityPost.errorMessage = null; // ?????? ?????? db ?????? ????????????????????? ????????? ??????.

      return updateCommunityPost;
    }
  }

  static async findCommunityPost({ id, userId }) {
    const post = await CommunityPost.findOne({
      where: { id: id, userId: userId },
    });
    if (!post) {
      const errorMessage = '????????? ?????? ????????????';
      return { errorMessage };
    } else {
      return post;
    }
  }

  static async deleteCommunityPost({ id, userId }) {
    const _id = await CommunityPost.destroy({
      where: { id: id, userId: userId },
    });
    if (!_id) {
      const errorMessage = '????????? ?????? ????????????';
      return errorMessage;
    } else {
      const message = '?????? ?????????????????????.';
      return message;
    }
  }
}

export { communityPostService };
