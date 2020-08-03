// eslint-disable-next-line strict

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Reservation', {
    id: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
  },
  mentee_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
  },
  Lecture_reservation_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
  },
  created_at: {
      type: Sequelize.DATE,
      allowNull: true,
  },
}),

  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Reservation'),
};
