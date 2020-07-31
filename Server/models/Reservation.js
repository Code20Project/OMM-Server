/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Reservation', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    mentee_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: {
          tableName: 'Mentees',
        },
        key: 'id',
      },
    },
    Lecture_reservation_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: {
          tableName: 'LectureReservation',
        },
        key: 'id',
      },
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  }, {
    sequelize,
    tableName: 'Reservation',
  });
};
