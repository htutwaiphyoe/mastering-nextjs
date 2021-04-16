import { validateEmail } from "../../helpers/utils";
const handler = (req, res) => {
    if (req.method === "POST") {
        const { email } = req.body;
        if (!email || !validateEmail(email)) {
            return res.status(422).json({
                status: "fail",
                message: "Invalid email address",
            });
        }
        return res.status(201).json({
            status: "success",
            newsletter: email,
        });
    }
};

export default handler;
