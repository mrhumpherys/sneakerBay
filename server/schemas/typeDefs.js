const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        toSell: [Shoe]
        toBuy: [Shoe]
    }

    type Shoe {
        _id: ID
        name: String
        size: Number
        description: String
        price: String
        sold: Boolean
        createdAt: String
        username: String
    }

    type Auth {
        token: ID!
        user: User
    }

    input shoeInput {
        name: String
        size: Number
        description: String
        price: String
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        shoes(username: String): [Shoe]
        shoe(_id: ID!): Shoe
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addShoe(input: shoeInput!): User
        removeShoe(_id: ID!): User
        buyShoe(input: shoeInput!): User
        updateSold(_id: ID!): Shoe
    }
`;

module.exports = typeDefs;

 