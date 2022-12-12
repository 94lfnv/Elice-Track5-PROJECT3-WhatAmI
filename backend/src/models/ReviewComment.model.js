import { Sequelize, DataTypes } from 'sequelize';

class ReviewComment extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        description: {
          type: DataTypes.STRING(500),
          allowNull: false,
        },
        reviewId: {
          type: Sequelize.INTEGER,
          foreignKey: true,
        },
        userId: {
          type: DataTypes.STRING(500),
          defaultValue: DataTypes.UUIDV4,
          foreignKey: true,
        },
      },
      {
        sequelize,
        timestamps: false,
        tableName: 'reviewComments',
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
      },
    );
  }
  static associate(db) {
    db.ReviewComment.belongsTo(db.Review, {
      foreignKey: 'reviewId',
      sourceKey: 'id',
    });
  }
  static associate(db) {
    db.ReviewComment.belongsTo(db.User, {
      foreignKey: 'userId',
      sourceKey: 'userId',
    });
  }
}

export { ReviewComment };
