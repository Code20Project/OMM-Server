module.exports = (sequelize, DataTypes) => {
    const ChatPeople = sequelize.define('ChatPeople', {
        chatroom_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
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
      timestamps: false,
  });
    ChatPeople.associate = function (models) {
        ChatPeople.hasMany(models.ChatRooms);
    };
    return ChatPeople;
};
