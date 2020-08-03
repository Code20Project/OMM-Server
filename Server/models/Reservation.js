module.exports = (sequelize, DataTypes) => {
    const Reservation = sequelize.define('Reservation', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        mentee_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        Lecture_reservation_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: true,
        },
    });
    Reservation.associate = function (models) {
        Reservation.belongsTo(models.Mentees, {
            foreignKey: 'mentee_id',
        });
    };
    Reservation.associate = function (models) {
        Reservation.belongsTo(models.LectureReservation, {
            foreignKey: 'Lecture_reservation_id',
        });
    };
    return Reservation;
};
