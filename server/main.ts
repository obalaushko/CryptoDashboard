import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import connectDB from './src/config/database';
import typeDefs from './src/schemas';
import resolvers from './src/resolvers';
import 'dotenv/config';

const startServer = async () => {
  const app = express();

  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 4000;

  await connectDB();  // Підключення до бази даних

  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}${server.graphqlPath}`);
  });
};

startServer().catch((error) => {
  console.error('Error starting server:', error);
});
