/* jshint indent: 2 */
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('ApplyLecture', {
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
  }, {
    sequelize,
    tableName: 'ApplyLecture',
  });
};
