// eslint-disable-next-line strict

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Lecture', {
    id: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    lecture_name: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    intro: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    curriculum_path: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    purchase: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    blog: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    etc: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    mentor_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: true,
    },
}),

  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Lecture'),
};
