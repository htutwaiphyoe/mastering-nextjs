import { MongoClient } from "mongodb";

async function handler(req, res) {
    if (req.method === "POST") {
        const { name, email, message } = req.body;
        if (!name || !email || !message) {
            return res.status(422).json({
                status: "fail",
                message: "Invalid inputs",
            });
        }
        let client;
        try {
            client = await MongoClient.connect(
                "mongodb+srv://nextblogs:nextblogs@cluster0.1l9ao.mongodb.net/blogs?retryWrites=true&w=majority"
            );
        } catch (e) {
            return res.status(500).json({
                status: "error",
                message: "Cannot connect to database!",
            });
        }

        const db = client.db();
        try {
            const result = await db.collection("messages").insertOne({ name, email, message });
            client.close();
            res.status(201).json({
                status: "success",
                message: result.ops[0],
            });
        } catch (e) {
            client.close();
            return res.status(500).json({
                status: "error",
                message: "Cannot store to database!",
            });
        }
    }
}

export default handler;
