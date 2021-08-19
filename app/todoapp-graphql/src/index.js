import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';
import InitiateMongoServer from './config/db'

import 'dotenv/config'
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

InitiateMongoServer();
server.listen(4001, () => {
  mongoose.connect(process.env.data_base_Url);
  console.log('connected to mongodb');
  console.log('🚀  Server ready at http://localhost:4001/');
});
