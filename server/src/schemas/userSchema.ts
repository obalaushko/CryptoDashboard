import { gql } from 'apollo-server-express';

const userSchema = gql`
  extend type Query {
    getUser(id: ID!): User
    getUsers: [User]
  }

  extend type Mutation {
    createUser(name: String!, email: String!): User
  }

  type User {
    id: ID!
    name: String!
    email: String!
  }
`;

export default userSchema;
