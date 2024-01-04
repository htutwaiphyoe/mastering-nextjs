import fs from "fs/promises";
import path from "path";

export const getPath = () => path.join(process.cwd(), "data", "feedbacks.json");

export const getFileData = async () => {
    const filePath = getPath();
    let fileData = await fs.readFile(filePath);
    return JSON.parse(fileData);
};

const handler = async (req, res) => {
    const filePath = getPath();
    const fileData = await getFileData();
    if (req.method === "POST") {
        const { email, feedback } = req.body;
        const data = {
            id: new Date().toISOString() + Math.random().toString(36),
            email,
            feedback,
        };

        fileData.push(data);
        await fs.writeFile(filePath, JSON.stringify(fileData));
        return res.status(201).json({
            status: "success",
            data: {
                feedback: data,
            },
        });
    }

    return res.status(200).json({
        status: "success",
        data: {
            feedbacks: fileData,
        },
    });
};
export default handler;
