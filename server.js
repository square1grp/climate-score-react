require('dotenv').config()
const { Sequelize } = require('sequelize');
const { ApolloServer, gql } = require('apollo-server');
const models = require('./models');
var { Score } = require('./models');

models.sequelize.sync().then(() => {
  const typeDefs = gql`
    type Score {
      address: String,
      avgScore: Int,
      droughtScore: Int,
      temperatureScore: Int,
      fireScore: Int,
      floodScore: Int,
      rainScore: Int
    }
  
    type Query {
      getScore(address: String!): Score
    }
  `;

  const resolvers = {
    Query: {
      getScore: async (parent, args) => {
        const score = await Score.findOne({ where: { 'address': args.address } })

        return score
      },
    },
  };

  const server = new ApolloServer({ typeDefs, resolvers });

  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
})