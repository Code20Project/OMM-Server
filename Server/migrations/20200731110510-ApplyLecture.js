// eslint-disable-next-line strict

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('ApplyLecture', {
    lecture_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: { model: 'Lecture', key: 'id' },
  },
  mentee_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: { model: 'Mentees', key: 'id' },
  },
}),

  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => queryInterface.dropTable('ApplyLecture'),
};
