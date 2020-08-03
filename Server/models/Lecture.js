module.exports = (sequelize, DataTypes) => {
    const Lecture = sequelize.define('Lecture', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
          },
          lecture_name: {
            type: DataTypes.STRING(255),
            allowNull: true,
          },
          intro: {
            type: DataTypes.STRING(255),
            allowNull: true,
          },
          curriculum_path: {
            type: DataTypes.STRING(255),
            allowNull: true,
          },
          purchase: {
            type: DataTypes.STRING(255),
            allowNull: true,
          },
          blog: {
            type: DataTypes.STRING(255),
            allowNull: true,
          },
          etc: {
              type: DataTypes.STRING(255),
              allowNull: true,
          },
          mentor_id: {
              type: DataTypes.INTEGER,
              allowNull: true,
          },
          created_at: {
            type: DataTypes.DATE,
            allowNull: true,
          },
    });
    Lecture.associate = function (models) {
        Lecture.hasMany(models.ApplyLecture);
    };
    Lecture.associate = function (models) {
        Lecture.hasMany(models.Review);
    };
    Lecture.associate = function (models) {
        Lecture.hasMany(models.LectureReservation);
    };
    Lecture.associate = function (models) {
        Lecture.hasOne(models.ChatRooms);
    };
    Lecture.associate = function (models) {
        Lecture.hasOne(models.LectureTag);
    };
    Lecture.associate = function (models) {
        Lecture.belongsTo(models.Mentors, {
            foreignKey: 'mentor_id',
        });
    };
    return Lecture;
};
