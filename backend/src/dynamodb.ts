import AWS from "aws-sdk"
import { UpdateItemInput } from "aws-sdk/clients/dynamodb";


const dynamoDB = new AWS.DynamoDB.DocumentClient();

interface UpdateItemParams {
    TableName?: string;
    Key: { [key: string]:string };
    UpdateExpression: string;
    ExpressionAttributeValues: { [key: string]:string  };
    
}

export const updateItem = async (params:UpdateItemParams) => {
    const query = {
        TableName: process.env.DYNAMODB_TABLE!,
        ...params
    }

    return new Promise((resolve, reject) => {
        dynamoDB.update(query, (err, result) => {
            if (err) {
                console.log(err);
                reject(err)
            } else{
                resolve(result)
            }
        });
    });
}
