module.exports = (sequelize, DataTypes) => {
    const LectureReservation = sequelize.define('LectureReservation', {
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
        reservation_datetime: {
            type: DataTypes.DATE,
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
