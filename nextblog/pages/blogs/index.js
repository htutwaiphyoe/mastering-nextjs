import AllBlogs from "../../components/blogs/AllBlogs";

const DUMMY_BLOGS = [
    {
        title: "Getting started with NextJS",
        slug: "getting-started-with-nextjs",
        excerpt:
            "Next.js gives you the best developer experience with all the features you need for production ",
        date: "2021-10-3",
        image: "cover.png",
    },
    {
        title: "Getting started with NextJS",
        slug: "getting-started-with-nextjs",
        excerpt:
            "Next.js gives you the best developer experience with all the features you need for production",
        date: "2021-10-3",
        image: "cover.png",
    },
    {
        title: "Getting started with NextJS",
        slug: "getting-started-with-nextjs",
        excerpt:
            "Next.js gives you the best developer experience with all the features you need for production",
        date: "2021-10-3",
        image: "cover.png",
    },
    {
        title: "Getting started with NextJS",
        slug: "getting-started-with-nextjs",
        excerpt:
            "Next.js gives you the best developer experience with all the features you need for production",
        date: "2021-10-3",
        image: "cover.png",
    },
];
function AllBlogsPage() {
    return <AllBlogs blogs={DUMMY_BLOGS} />;
}

export default AllBlogsPage;
