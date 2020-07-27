const DataTypes = require('sequelize/lib/data-types');

/**
 * Actions summary:
 *
 * createTable "LectureTag", deps: []
 * createTable "ApplyLecture", deps: []
 * createTable "ChatRooms", deps: []
 * createTable "Lecture", deps: []
 * createTable "LectureReservation", deps: []
 * createTable "ChatPeople", deps: []
 * createTable "Mentees", deps: []
 * createTable "Mentors", deps: []
 * createTable "Reservation", deps: []
 * createTable "Review", deps: []
 * createTable "Tag", deps: []
 *
 * */

const info = {
    revision: 1,
    name: 'user',
    created: '2020-07-27T05:13:13.705Z',
    comment: '',
};

const migrationCommands = [{
        fn: 'createTable',
        params: [
            'LectureTag',
            {
                lecture_id: {
                    type: DataTypes.INTEGER,
                    allowNull: true,
                    references: {
                      model: {
                        tableName: 'Lecture',
                      },
                      key: 'id',
                    },
                  },
                  tag_id: {
                    type: DataTypes.INTEGER,
                    allowNull: true,
                    references: {
                      model: {
                        tableName: 'Tag',
                      },
                      key: 'id',
                    },
                  },

            },
            {},
        ],
    },
    {
        fn: 'createTable',
        params: [
            'ApplyLecture',
            {
                lecture_id: {
                    type: DataTypes.INTEGER,
                    allowNull: true,
                    references: {
                      model: {
                        tableName: 'Lecture',
                      },
                      key: 'id',
                    },
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
            },
            {},
        ],
    },
    {
        fn: 'createTable',
        params: [
            'ChatRooms',
            {
                id: {
                    autoIncrement: true,
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                  },
                  lecture_id: {
                    type: DataTypes.INTEGER,
                    allowNull: true,
                    references: {
                      model: {
                        tableName: 'Lecture',
                      },
                      key: 'id',
                    },
                  },
            },
            {},
        ],
    },
    {
        fn: 'createTable',
        params: [
            'Lecture',
            {
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
            },
            {},
        ],
    },
    {
        fn: 'createTable',
        params: [
            'LectureReservation',
            {
                id: {
                    autoIncrement: true,
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                  },
                  lecture_id: {
                    type: DataTypes.INTEGER,
                    allowNull: true,
                    references: {
                      model: {
                        tableName: 'Lecture',
                      },
                      key: 'id',
                    },
                  },
                  reservation_datetime: {
                    type: DataTypes.DATE,
                    allowNull: true,
                  },
                  max: {
                    type: DataTypes.INTEGER,
                    allowNull: true,
                  },
                  class_link: {
                    type: DataTypes.STRING(255),
                    allowNull: true,
                  },
                  status: {
                    type: DataTypes.INTEGER(1),
                    allowNull: true,
                  },
                  created_at: {
                    type: DataTypes.DATE,
                    allowNull: true,
                  },
            },
            {},
        ],
    },
    {
        fn: 'createTable',
        params: [
            'ChatPeople',
            {
                chatroom_id: {
                    type: DataTypes.INTEGER,
                    allowNull: true,
                    references: {
                      model: {
                        tableName: 'ChatRooms',
                      },
                      key: 'id',
                    },
                  },
                  person_id: {
                    type: DataTypes.INTEGER,
                    allowNull: true,
                  },
                  type: {
                    type: DataTypes.STRING(255),
                    allowNull: true,
                  },
            },
            {},
        ],
    },
    {
        fn: 'createTable',
        params: [
            'Mentees',
            {
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
            },
            {},
        ],
    },
    {
        fn: 'createTable',
        params: [
            'Mentors',
            {
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
            {},
        ],
    },
    {
        fn: 'createTable',
        params: [
            'Reservation',
            {
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
            },
            {},
        ],
    },
    {
        fn: 'createTable',
        params: [
            'Review',
            {
                id: {
                    autoIncrement: true,
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                  },
                  lecture_id: {
                    type: DataTypes.INTEGER,
                    allowNull: true,
                    references: {
                      model: {
                        tableName: 'Lecture',
                      },
                      key: 'id',
                    },
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
            },
            {},
        ],
    },
    {
        fn: 'createTable',
        params: [
            'Tag',
            {
                id: {
                    autoIncrement: true,
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                  },
                  tag_name: {
                    type: DataTypes.STRING(255),
                    allowNull: true,
                  },
                  created_at: {
                    type: DataTypes.DATE,
                    allowNull: true,
                  },
            },
            {},
        ],
    },
];

module.exports = {
    pos: 0,
    // eslint-disable-next-line no-unused-vars
    up(queryInterface, Sequelize) {
        let index = this.pos;
        return new Promise((resolve, reject) => {
            function next() {
                if (index < migrationCommands.length) {
                    const command = migrationCommands[index];
                    console.log(`[#${index}] execute: ${command.fn}`);
                    index += 1;
                    // eslint-disable-next-line prefer-spread
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                } else resolve();
            }
            next();
        });
    },
    info,
};
