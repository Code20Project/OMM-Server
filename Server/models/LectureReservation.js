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
        LectureReservation.hasMany(models.Reservation);
    };
    LectureReservation.associate = function (models) {
        LectureReservation.belongsTo(models.Lecture, {
            foreignKey: 'lecture_id',
        });
    };
    return LectureReservation;
};
