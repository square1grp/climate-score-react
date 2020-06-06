const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const models = require('./models');
var { Score } = require('./models');
const stripe = require("stripe")("sk_test_51GqMLtJRjq8u23eqA0XluEmRn8wCiewKIqTm8TWGuw6fK8KWpiMQZTkrv8pv3b3y1YbZxIc3Zwqam6Gfgax7S4Dk00cDEzyQHq");
var cors = require('cors')


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

  const app = express();
  app.use(cors())

  app.post("/create-payment-intent", async (req, res) => {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 49900,
      currency: "usd"
    });

    res.send({
      clientSecret: paymentIntent.client_secret
    });
  });

  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
})