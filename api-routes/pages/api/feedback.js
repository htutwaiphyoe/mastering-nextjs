import fs from "fs/promises";
import path from "path";

const handler = async (req, res) => {
    const filePath = path.join(process.cwd(), "data", "feedbacks.json");
    let fileData = await fs.readFile(filePath);
    fileData = JSON.parse(fileData);
    
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
