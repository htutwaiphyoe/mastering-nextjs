import fs from "fs";
import path from "path";

import matter from "gray-matter";

const dirPath = path.join(process.cwd(), "data", "blogs");
export function getAllFiles() {
    return fs.readdirSync(dirPath);
}

export function getFileData(filename) {
    const fileData = fs.readFileSync(path.join(dirPath, filename), "utf8");

    const { data, content } = matter(fileData);
    const slug = filename.replace(/\.md$/, "");

    return {
        slug,
        ...data,
        content,
    };
}

export function getAllBlogs() {
    const fileNames = getAllFiles();
    const blogs = fileNames.map((f) => getFileData(f));
    const sortedBlogs = blogs.sort((a, b) => (a.date > b.data ? -1 : 1));
    return sortedBlogs;
}

export function getFeaturedBlogs() {
    const allBlogs = getAllBlogs();
    const featuredBlogs = allBlogs.filter((post) => post.isFeatured);
    return featuredBlogs;
}
