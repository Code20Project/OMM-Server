module.exports = (sequelize, DataTypes) => {
    const Mentees = sequelize.define('Mentees', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        mentee_name: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        sex: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        phone: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        birthday: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        point: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: true,
        },
    });
    Mentees.associate = function (models) {
        Mentees.hasMany(models.ApplyLecture);
    };
    Mentees.associate = function (models) {
        Mentees.hasMany(models.Reservation);
    };
    Mentees.associate = function (models) {
        Mentees.hasMany(models.Review);
    };
    return Mentees;
};
