import { connectDatabase, insertDocument, getAllDocuments } from "../../../helpers/dbUtils";
import { validateEmail } from "../../../helpers/utils";
const handler = async (req, res) => {
    const { id } = req.query;
    let client;
    try {
        client = await connectDatabase();
    } catch (err) {
        return res.status(500).json({ status: "fail", message: "Database connection failed" });
    }

    if (req.method === "GET") {
        try {
            const result = await getAllDocuments(client, "comments", { eventId: id }, { _id: -1 });
            client.close();
            return res.status(200).json({
                status: "success",
                comments: result,
            });
        } catch (err) {
            return res.status(500).json({ status: "fail", message: "Fetching comments failed" });
        }
    }

    if (req.method === "POST") {
        const { email, name, text } = req.body;
        if (!email || !validateEmail(email) || !name || !text) {
            return res.status(422).json({
                status: "fail",
                message: "Invalid inputs",
            });
        }
        try {
            const result = await insertDocument(client, "comments", {
                name,
                email,
                text,
                eventId: id,
            });

            client.close();
            return res.status(200).json({
                status: "success",
                comment: result,
            });
        } catch (err) {
            return res.status(500).json({ status: "fail", message: "Inserting comment failed" });
        }
    }
};

export default handler;
