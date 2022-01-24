const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Book {
        authors: [String]
        description: String
        bookId: String!
        image: String
        link: String
        title: String!
    }

    type User {
        _id: ID
        username: String!
        email: String!
    }

    type Query {
        me: User
      }

    type Auth {
        token: ID!
        user: User
      }


    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(book: bookInput): User
        removeBook(bookId: String!): User
      }
`

module.exports = typeDefs;
