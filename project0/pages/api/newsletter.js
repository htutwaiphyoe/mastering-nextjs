import { validateEmail } from "../../helpers/utils";
import { connectDatabase, insertDocument } from "../../helpers/dbUtils";
const handler = async (req, res) => {
    if (req.method === "POST") {
        const { email } = req.body;
        if (!email || !validateEmail(email)) {
            return res.status(422).json({
                status: "fail",
                message: "Invalid email address",
            });
        }
        let client;
        try {
            client = await connectDatabase();
        } catch (e) {
            return res.status(500).json({
                status: "fail",
                message: "Database connection fail",
            });
        }

        try {
            await insertDocument(client, "newsletters", { email });
            client.close();
        } catch (e) {
            return res.status(500).json({
                status: "fail",
                message: "Inserting document failed",
            });
        }

        res.status(201).json({
            status: "success",
            newsletter: email,
        });
    }
};

export default handler;
