module.exports = (sequelize, DataTypes) => {
    const ApplyLectures = sequelize.define('ApplyLectures', {
        lecture_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        mentee_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    });
    ApplyLectures.associate = function (models) {
        ApplyLectures.belongsTo(models.Mentees, {
            foreignkey: 'mentee_id',
        });
    };
    ApplyLectures.associate = function (models) {
        ApplyLectures.belongsTo(models.Lecture, {
            foreignKey: 'lecture_id',
        });
    };
    return ApplyLectures;
};
