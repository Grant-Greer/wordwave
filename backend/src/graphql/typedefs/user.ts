import { gql } from "apollo-server-core";

export const typeDefs = gql`
  type User {
    id: String
    username: String
  }

  type Query {
    searchUsers(username: String): [User]
  }

  type Mutation {
    createUsername(username: String): User
  }

  type CreateUsernameResponse {
    success: Boolean
    error: String
  }
`;

export default typeDefs;
