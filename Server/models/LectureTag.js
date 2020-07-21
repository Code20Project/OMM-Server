/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('LectureTag', {
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
    tag_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: {
          tableName: 'Tag',
        },
        key: 'id',
      },
    },
  }, {
    sequelize,
    tableName: 'LectureTag',
  });
};
