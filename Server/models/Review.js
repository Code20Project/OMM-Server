/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Review', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    lecture_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: {
          tableName: 'Lecture',
        },
        key: 'id',
      },
    },
    mentee_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: {
          tableName: 'Mentees',
        },
        key: 'id',
      },
    },
    comment: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    star: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  }, {
    sequelize,
    tableName: 'Review',
  });
};
