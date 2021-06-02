const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        toSell: [Shoe]
        bought: [Shoe]
        sellCount: Int
        buyCount: Int
        createdAt: String
        avatar: String
    }

    type Shoe {
        _id: ID
        name: String
        size: String
        description: String
        price: String
        sold: Boolean
        createdAt: String
        username: String
        image: String
    }

    type Auth {
        token: ID!
        user: User
    }

    input shoeInput {
        name: String
        size: String
        description: String
        price: String
    }

    input shoeBuyInput {
        name: String
        size: String
        description: String
        price: String
        username: String
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
        addShoe(input: shoeInput!): Shoe
        removeShoe(_id: ID!): User
        buyShoe(_id: ID!): User
        updateSold(_id: ID!): Shoe
        updateAvatar(avatar: String!): User
    }
`;

module.exports = typeDefs;

 