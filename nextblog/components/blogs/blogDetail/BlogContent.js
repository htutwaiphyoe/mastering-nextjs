import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";

import BlogHeader from "./BlogHeader";
import classes from "./BlogContent.module.css";

SyntaxHighlighter.registerLanguage("js", js);

function BlogContent(props) {
    const { blog } = props;
    const imagePath = `/images/blogs/${blog.slug}/${blog.image}`;
    const customRenderers = {
        // img(image) {
        //     return (
        //         <Image
        //             src={image.src}
        //             alt={image.alt}
        //             width={600}
        //             height={300}
        //             layout="responsive"
        //         />
        //     );
        // },
        p(p) {
            const { node } = p;
            if (node.children[0].tagName === "img") {
                const image = node.children[0].properties;

                return (
                    <Image
                        src={`/images/blogs/${blog.slug}/${image.src}`}
                        alt={image.alt}
                        width={600}
                        height={300}
                        layout="responsive"
                    />
                );
            }
            return <p>{p.children}</p>;
        },
        // code(code) {
        //     const { language, value } = code;
        //     return <SyntaxHighlighter language={language} children={value} style={dark} />;
        // },
        code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
                <SyntaxHighlighter
                    style={atomDark}
                    language={match[1]}
                    PreTag="div"
                    children={String(children).replace(/\n$/, "")}
                    {...props}
                />
            ) : (
                <code className={className} {...props} />
            );
        },
    };
    return (
        <article className={classes.content}>
            <BlogHeader image={imagePath} title={blog.title} />
            <ReactMarkdown components={customRenderers}>{blog.content}</ReactMarkdown>
        </article>
    );
}

export default BlogContent;
