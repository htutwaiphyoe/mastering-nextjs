import NextAuth from "next-auth";
import Providers from "next-auth/providers";

import { connectDatabase } from "../../../libs/db";
import { verifyPassword } from "../../../libs/auth";

export default NextAuth({
    session: {
        jwt: true,
    },
    providers: [
        Providers.Credentials({
            async authorize(credentials) {
                const { email, password } = credentials;
                const client = await connectDatabase();
                const db = client.db();
                const user = await db.collection("users").findOne({ email });

                if (!user || !(await verifyPassword(password, user.password))) {
                    client.close();
                    throw new Error("Email or password is incorrect!");
                }
                client.close();
                return { email: user.email };
            },
        }),
    ],
});
