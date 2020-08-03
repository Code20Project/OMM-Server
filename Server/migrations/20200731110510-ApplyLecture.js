// eslint-disable-next-line strict

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('ApplyLecture', {
    lecture_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
  },
  mentee_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
  },
}),

  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => queryInterface.dropTable('ApplyLecture'),
};
