// eslint-disable-next-line strict

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('ChatPeople', {
    chatroom_id: {
      type: Sequelize.INTEGER,
      references: { model: 'ChatRooms', key: 'id' },
      allowNull: true,
    },
    person_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    type: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
}),

  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => queryInterface.dropTable('ChatPeople'),
};
