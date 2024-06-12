import { gql } from 'apollo-server-express';
import userSchema from './userSchema';

const baseSchema = gql`
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
`;

const typeDefs = [baseSchema, userSchema];

export default typeDefs;
