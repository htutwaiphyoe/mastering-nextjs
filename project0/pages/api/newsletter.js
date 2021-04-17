import { MongoClient } from "mongodb";

import { validateEmail } from "../../helpers/utils";
const handler = async (req, res) => {
    if (req.method === "POST") {
        const { email } = req.body;
        if (!email || !validateEmail(email)) {
            return res.status(422).json({
                status: "fail",
                message: "Invalid email address",
            });
        }
        const client = await MongoClient.connect(
            "mongodb+srv://nextjs:nextjsevents@cluster0.1l9ao.mongodb.net/events?retryWrites=true&w=majority"
        );
        const db = client.db();
        await db.collection("emails").insertOne({ email });
        client.close();
        res.status(201).json({
            status: "success",
            newsletter: email,
        });
    }
};

export default handler;
