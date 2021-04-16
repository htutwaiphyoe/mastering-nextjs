import { validateEmail } from "../../../helpers/utils";
const handler = (req, res) => {
    const { id } = req.query;
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
        return res.status(200).json({
            status: "success",
        });
    }
};

export default handler;
