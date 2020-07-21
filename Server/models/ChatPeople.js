/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('ChatPeople', {
    chatroom_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: {
          tableName: 'ChatRooms',
        },
        key: 'id',
      },
    },
    person_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  }, {
    sequelize,
    tableName: 'ChatPeople',
  });
};
