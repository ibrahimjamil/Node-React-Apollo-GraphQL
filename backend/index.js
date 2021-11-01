const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const typeDefs = require('./GraphQL/typeDefs')
const resolvers = require('./GraphQL/resolvers')
const UserApi = require('./GraphQL/dataSource/userApi')
const {
  graphqlUploadExpress, // A Koa implementation is also exported.
} = require('graphql-upload');

async function startApolloServer(typeDefs, resolvers) {
  const app = express();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context:({req})=>{
      let user = "admin"
      return {user}
    },
    dataSources: () => {
      return {
        userAPI: new UserApi(),
      }
    },
    introspection: false,
  });
  await server.start();
  app.use(graphqlUploadExpress());
  server.applyMiddleware({ app , path: '/'});
  await app.listen(5000);
  console.log(`🚀 Server ready at http://localhost:5000`);
}

startApolloServer(typeDefs,resolvers)