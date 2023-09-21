import Sequelize from 'sequelize';

const sequelize = new Sequelize('user_management_db', 'root', 'ryan14', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
});

export default sequelize;
