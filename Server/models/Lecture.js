/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Lecture', {
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
      references: {
        model: {
          tableName: 'Mentors',
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
    tableName: 'Lecture',
    timestamps: false,
  });
};
