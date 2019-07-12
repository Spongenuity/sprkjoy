import { ApolloServer, gql } from "apollo-server-lambda"
import AWS from "aws-sdk"
import uuidv4 from "uuid/v4"

const dynamoDB = new AWS.DynamoDB.DocumentClient();

const typeDefs = gql`
    type Query {
        hello: String
    }

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
    },
    Mutation: {
        saveWidget: async ( a: any, { name }: { name: string}) => {
            const widgetId = uuidv4();

            const result = await new Promise((resolve, reject) => {
                dynamoDB.update({
                    TableName: process.env.DYNAMOTABLE!,
                    Key: { widgetId },
                    UpdateExpression: "SET widgetId = :widgetId name = :name",
                    ExpressionAttributeValues: {
                        ":widgetId": widgetId,
                        ":name": name
                    }
                });
            });

            console.log(result)
            return {
                name,
                widgetId,
                thumbsup: 0,
                thumbsdown: 0

            }
        }
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

export const handler = server.createHandler();