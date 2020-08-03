// eslint-disable-next-line strict

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Review', {
    id: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    lecture_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    mentee_id: {
      type: Sequelize.INTEGER,
      references: { model: 'Mentees', key: 'id' },
      allowNull: true,
    },
    comment: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    star: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
}),

  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Review'),
};
