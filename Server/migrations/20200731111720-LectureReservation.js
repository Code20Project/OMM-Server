// eslint-disable-next-line strict

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('LectureReservation', {
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
    reservation_datetime: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    max: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    class_link: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    status: {
      type: Sequelize.INTEGER(1),
      allowNull: true,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: true,
    },
}),

  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => queryInterface.dropTable('LectureReservation'),
};
