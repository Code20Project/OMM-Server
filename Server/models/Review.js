module.exports = (sequelize, DataTypes) => {
    const Review = sequelize.define('Review', {
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
          mentee_id: {
            type: DataTypes.DATE,
            allowNull: true,
          },
          comment: {
            type: DataTypes.STRING(255),
            allowNull: true,
          },
          star: {
            type: DataTypes.INTEGER,
            allowNull: true,
          },
          created_at: {
            type: DataTypes.DATE,
            allowNull: true,
          },
    });
    Review.associate = function (models) {
        Review.belongsTo(models.Lecture, {
            foreignKey: 'lecture_id',
        });
    };
    Review.associate = function (models) {
        Review.belongsTo(models.Mentees, {
            foreignKey: 'mentee_id',
        });
    };
    return Review;
};
