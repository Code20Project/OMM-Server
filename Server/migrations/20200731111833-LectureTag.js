// eslint-disable-next-line strict

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('LectureTag', {
    lecture_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
  },
  tag_id: {
      type: Sequelize.INTEGER,
      references: { model: 'Tag', key: 'id' },
      allowNull: true,
  },
}),

  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => queryInterface.dropTable('LectureTag'),
};
