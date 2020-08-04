// eslint-disable-next-line strict

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Mentors', {
    id: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
  },
  mentor_name: {
      type: Sequelize.STRING(255),
      allowNull: true,
  },
  nickname: {
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
  certification_path: {
      type: Sequelize.STRING(255),
      allowNull: true,
  },
  intro: {
      type: Sequelize.STRING(255),
      allowNull: true,
  },
  created_at: {
    type: Sequelize.DATE,
    allowNull: true,
},
}),

  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Mentors'),
};
