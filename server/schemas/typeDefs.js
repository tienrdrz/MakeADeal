const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    itemCount: Int
    items: [Item]
  }

  type Item {
    _id: ID
    itemName: String
    postedAt: String
    itemDesc: String
    itemPrice: Int
  }

  type Query {
    me: User
    user(email: String!): User
    items: [Item]
  }
  type Auth {
    token: ID!
    user: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addItem(itemName: String!, itemDesc: String!, itemPrice: String!): User
  }
`;

module.exports = typeDefs;
