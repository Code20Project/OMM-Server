// eslint-disable-next-line strict

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Mentees', {
    id: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
  },
  mentee_name: {
      type: Sequelize.STRING(255),
      allowNull: true,
  },
  email: {
      type: Sequelize.STRING(255),
      allowNull: true,
  },
  password: {
      type: Sequelize.STRING(255),
      allowNull: true,
  },
  sex: {
      type: Sequelize.STRING(255),
      allowNull: true,
  },
  phone: {
      type: Sequelize.STRING(255),
      allowNull: true,
  },
  birthday: {
      type: Sequelize.STRING(255),
      allowNull: true,
  },
  point: {
      type: Sequelize.INTEGER,
      allowNull: true,
  },
}),

  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Mentees'),
};
