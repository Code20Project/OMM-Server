module.exports = (sequelize, DataTypes) => {
    const Mentors = sequelize.define('Mentors', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        mentor_name: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        nickname: {
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
        certification_path: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        intro: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: true,
        },
    },
    {
        sequelize,
        tableName: 'Mentors',
        timestamps: false,
    });
    Mentors.associate = function (models) {
        Mentors.hasMany(models.Lecture);
    };
    return Mentors;
};
