// eslint-disable-next-line strict

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('ChatRooms', {
    id: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    lecture_id: {
      type: Sequelize.INTEGER,
      references: { model: 'Lecture', key: 'id' },
      allowNull: true,
    },
}),

  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => queryInterface.dropTable('ChatRooms'),
};
