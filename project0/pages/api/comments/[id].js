import { MongoClient } from "mongodb";

import { validateEmail } from "../../../helpers/utils";
const handler = async (req, res) => {
    const { id } = req.query;
    const client = await MongoClient.connect(
        "mongodb+srv://nextjs:nextjsevents@cluster0.1l9ao.mongodb.net/events?retryWrites=true&w=majority"
    );
    const db = client.db();
    if (req.method === "GET") {
        return res.status(200).json({
            status: "success",
        });
    }

    if (req.method === "POST") {
        const { email, name, text } = req.body;
        if (!email || !validateEmail(email) || !name || !text) {
            return res.status(422).json({
                status: "fail",
                message: "Invalid inputs",
            });
        }
        const result = await db
            .collection("comments")
            .insertOne({ name, email, text, eventId: id });
        client.close();
        res.status(200).json({
            status: "success",
            comment: result,
        });
    }
};

export default handler;
