import { MongoClient } from "mongodb";
export const connectDatabase = async () => {
    const client = await MongoClient.connect(
        "mongodb+srv://nextjs:nextjsevents@cluster0.1l9ao.mongodb.net/events?retryWrites=true&w=majority"
    );
    return client;
};

export const insertDocument = async (client, collection, document) => {
    const db = client.db();
    const result = await db.collection(collection).insertOne(document);
    return result;
};

export const getAllDocuments = async (client, collection, filter, sort) => {
    const db = client.db();
    const documents = await db.collection(collection).find(filter).sort(sort).toArray();
    return documents;
};
