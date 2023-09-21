import Sequelize from 'sequelize';

const sequelize = new Sequelize('user_management_db', 'root', 'yourpassword', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
});

export default sequelize;
