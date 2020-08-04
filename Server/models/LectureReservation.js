module.exports = (sequelize, DataTypes) => {
    const LectureReservation = sequelize.define('LectureReservation', {
        lecture_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        mentee_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    }, {
        sequelize,
        tableName: 'LectureReservation',
        timestamps: false,
    });
    LectureReservation.associate = function (models) {
        LectureReservation.belongsTo(models.Mentee, {
            foreignKey: {
                allowNull: true,
            },
        });
    };
    LectureReservation.associate = function (models) {
        LectureReservation.belongsTo(models.Lecture, {
            foreignKey: {
                allowNull: true,
            },
        });
    };
    return LectureReservation;
};
