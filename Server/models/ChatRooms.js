module.exports = (sequelize, DataTypes) => {
    const ChatRooms = sequelize.define('ChatRooms', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
          },
          lecture_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
          },
    }, {
        sequelize,
        tableName: 'ChatRooms',
        timestamps: false,
    });
    ChatRooms.associate = function (models) {
        ChatRooms.hasMany(models.ChatPeople);
    };
    ChatRooms.associate = function (models) {
        ChatRooms.belongsTo(models.Lecture, {
            foreignKey: 'ChatRooms_id',
        });
    };
    return ChatRooms;
};
