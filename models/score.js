'use strict';
module.exports = (sequelize, DataTypes) => {
  const Score = sequelize.define('Score', {
    address: DataTypes.STRING,
    avgScore: DataTypes.INTEGER,
    droughtScore: DataTypes.INTEGER,
    temperatureScore: DataTypes.INTEGER,
    fireScore: DataTypes.INTEGER,
    floodScore: DataTypes.INTEGER,
    rainScore: DataTypes.INTEGER
  }, {});
  Score.associate = function(models) {
    // associations can be defined here
  };
  return Score;
};