const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    itemCount: Int
    items: [item]
  }

  type Item {
    _id: ID
    itemName: String
    postedAt: String
    itemDescription: String
    itemPrice: Int
  }

  type Query {
    me: User
    user(username: String!): User
    items(username: String): [Item]
  }
  type Auth {
    token: ID!
    user: User
    
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addItem(itemDesc: String!): Item
  }
`;

module.exports = typeDefs;
