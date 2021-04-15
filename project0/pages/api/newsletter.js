function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
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
