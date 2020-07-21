/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('ChatRooms', {
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
  }, {
    sequelize,
    tableName: 'ChatRooms',
  });
};
