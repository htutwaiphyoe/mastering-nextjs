import { MongoClient } from "mongodb";

export async function connectDatabase() {
    const client = await MongoClient.connect(
        "mongodb+srv://nextauth:nextauth@cluster0.1l9ao.mongodb.net/auth?retryWrites=true&w=majority"
    );

    return client;
}
