const handler = (req, res) => {
    console.log(req.query);

    res.status(200).json({
        status: "success",
    });
};

export default handler;
