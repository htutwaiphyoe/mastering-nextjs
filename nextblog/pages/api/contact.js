async function handler(req, res) {
    if (req.method === "POST") {
        const { name, email, message } = req.body;
        if (!name || !email || !message) {
            return res.status(422).json({
                status: "fail",
                message: "Invalid inputs",
            });
        }
        res.status(201).json({
            status: "success",
            message: "ok",
        });
    }
}

export default handler;
