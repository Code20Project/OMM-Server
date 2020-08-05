module.exports = (sequelize, DataTypes) => {
    const Tag = sequelize.define('Tag', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
          },
          tag_name: {
            type: DataTypes.STRING(255),
            allowNull: true,
          },
    }, {
        sequelize,
        tableName: 'Tag',
        timestamps: false,
    });
    Tag.associate = function (models) {
        Tag.hasMany(models.LectureTag);
    };
    return Tag;
};
