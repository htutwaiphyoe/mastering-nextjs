import { getSession } from "next-auth/client";
import { connectDatabase } from "../../../libs/db";
import { verifyPassword, hashPassword } from "../../../libs/auth";

async function handler(req, res) {
    if (req.method !== "PATCH") {
        return res.status(400).json({
            status: "fail",
            message: `${req.method} method is not allowed`,
        });
    }

    const session = await getSession({ req });
    if (!session) {
        return res.status(401).json({
            status: "fail",
            message: `You are not authenticated`,
        });
    }

    const { oldPassword, newPassword } = req.body;

    if (!oldPassword || !newPassword || oldPassword.length < 8 || newPassword.length < 8) {
        return res.status(422).json({
            status: "fail",
            message: `Invaid input`,
        });
    }

    const client = await connectDatabase();
    const db = client.db();

    const user = await db.collection("users").findOne({ email: session.user.email });
    if (!user) {
        client.close();
        return res.status(404).json({
            status: "fail",
            message: `No user found!`,
        });
    }

    if (!(await verifyPassword(oldPassword, user.password))) {
        client.close();
        return res.status(422).json({
            status: "fail",
            message: `Password is incorrect`,
        });
    }
    const hashedNewPassword = await hashPassword(newPassword);
    await db
        .collection("users")
        .updateOne({ email: session.user.email }, { $set: { password: hashedNewPassword } });

    client.close();

    res.status(201).json({
        status: "success",
        message: "Password was successfully updated",
    });
}

export default handler;
