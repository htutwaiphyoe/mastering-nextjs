import { connectDatabase } from "../../../libs/db";
import { hashPassword } from "../../../libs/auth";

async function handler(req, res) {
    if (req.method === "POST") {
        const { email, password } = req.body;
        if (!email || !password || password.length < 8) {
            return res.status(422).json({
                status: "fail",
                message: "Invalid email or password",
            });
        }

        const client = await connectDatabase();
        const db = client.db();

        const user = await db.collection("users").findOne({ email });
        if (user) {
            client.close();
            return res.status(401).json({ status: "fail", message: "User already exists" });
        }
        const hash = await hashPassword(password);
        await db.collection("users").insertOne({
            email,
            password: hash,
        });
        client.close();
        res.status(201).json({
            status: "success",
            message: "Sign up successfully",
        });
    }
}

export default handler;
