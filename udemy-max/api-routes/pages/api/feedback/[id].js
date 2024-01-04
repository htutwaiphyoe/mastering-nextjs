import { getFileData } from "./index";

const handler = async (req, res) => {
    const { id } = req.query;
    const data = await getFileData();
    const feedback = data.find((f) => f.id === id);
    res.status(200).json({
        status: "success",
        data: feedback,
    });
};

export default handler;
