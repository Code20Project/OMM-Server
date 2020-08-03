module.exports = (sequelize, DataTypes) => {
    const LectureTag = sequelize.define('LectureTag', {
        lecture_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        tag_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    }, {
        sequelize,
        tableName: 'LectureTag',
        timestamps: false,
    });
    LectureTag.associate = function (models) {
        LectureTag.belongsTo(models.Tag, {
            foreignKey: 'tag_id',
        });
    };
    LectureTag.associate = function (models) {
        LectureTag.belongsTo(models.Lecture, {
            foreignKey: 'lecture_id',
        });
    };
    return LectureTag;
};
