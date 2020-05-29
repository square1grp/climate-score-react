'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert('Scores', [{
      address: '3650 Rosecrans Street. San Diego. CA 92110',
      avgScore: 42,
      droughtScore: 54,
      temperatureScore: 92,
      fireScore: 8,
      floodScore: 21,
      rainScore: 72,
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    }])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */

    return queryInterface.bulkDelete('Scores', null, {})
  }
};
