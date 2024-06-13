import express from "express";
import { ApolloServer } from "apollo-server-express";
import connectDB from "./src/config/database";
import typeDefs from "./src/schemas";
import resolvers from "./src/resolvers";
import "dotenv/config";
import path from "path";

const startServer = async () => {
  const app = express();
  const PORT = process.env.PORT || 4000;


  await connectDB(); // Connect to MongoDB

  // Apollo Server setup
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    persistedQueries: false,
    cache: "bounded",
  });
  await server.start();
  server.applyMiddleware({ app });

  // Serve static files from client build directory
  app.use(express.static(path.join(__dirname, "../client/dist")));

  // All other requests should be handled by the client
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist/index.html"));
  });

  // Disable access to GraphQL endpoint from external requests in production
  if (process.env.NODE_ENV === 'production') {
    app.use('/graphql', (req, res) => {
      res.status(403).send('Access denied');
    });
  }

  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
};

startServer().catch((error) => {
  console.error("Error starting server:", error);
});
