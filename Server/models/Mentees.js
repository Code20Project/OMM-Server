/* eslint-disable no-param-reassign */
const crypto = require('crypto');

const salt = process.env.SALT;

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
    }, {
        hooks: {
          // 비밀번호를 해싱해서 데이터베이스에 저장한다.
          beforeCreate: (data) => {
            const shasum = crypto.createHmac('sha512', salt);
            shasum.update(data.password);
            data.password = shasum.digest('hex');
          },
          // 데이터를 찾기 전에 들어온 데이터의 password를 해싱함수를 통해 검증할 수 있게 한다.
          beforeFind: (data) => {
            if (data.where.password) {
              const shasum = crypto.createHmac('sha512', salt);
              shasum.update(data.where.password);
              data.where.password = shasum.digest('hex');
            }
          },
        },
        sequelize,
        tableName: 'Mentees',
        timestamps: false,
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
