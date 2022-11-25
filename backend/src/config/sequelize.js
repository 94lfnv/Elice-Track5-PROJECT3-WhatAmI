import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER_NAME,
  process.env.DB_USER_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    timezone: 'Asia/Seoul', // 서울 시간대
    dialectOptions: {
      charset: 'utf8mb4',
      dateStrings: true,
      typeCast: true,
      timezone: 'Asia/Seoul',
    },
  },
);

export default sequelize;
