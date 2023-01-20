const { Sequelize, sequelize } = require('../db')

const Ticket = sequelize.define('ticket', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    projectName: {
        type: Sequelize.STRING,
        allowNull: true
    },
    assignee: {
        type: Sequelize.STRING,
        allowNull: false
    },
    priority: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    commitLink: {
        type: Sequelize.STRING,
        allowNull: true
    }
});

module.exports = Ticket;