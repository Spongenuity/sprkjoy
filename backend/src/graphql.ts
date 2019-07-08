import { ApolloServer, gql } from "apollo-server-lambda"

const typeDefs = gql`
    type Widget {
        widgetId: String!
        name: String
        thumbsup: Int
        thumbsdown: Int
    }

    type Mutation {
        saveWidget(name: String!): Widget
    }
`;

const resolvers = {
    Query: {
        hello:() => "Hello World"
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

export const handler = server.createHandler();