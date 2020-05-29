'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Scores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      address: {
        type: Sequelize.STRING
      },
      avgScore: {
        type: Sequelize.INTEGER
      },
      droughtScore: {
        type: Sequelize.INTEGER
      },
      temperatureScore: {
        type: Sequelize.INTEGER
      },
      fireScore: {
        type: Sequelize.INTEGER
      },
      floodScore: {
        type: Sequelize.INTEGER
      },
      rainScore: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Scores');
  }
};