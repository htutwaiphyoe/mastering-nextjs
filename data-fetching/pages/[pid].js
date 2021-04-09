import fs from "fs/promises";
import path from "path";

const ProductDetail = (props) => {
    const { product } = props;
    return (
        <main>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
        </main>
    );
};

export async function getStaticProps(context) {
    console.log(context);
    const { params } = context;
    const jsonData = await fs.readFile(path.join(process.cwd(), "dev_data", "data.json"), "utf8");
    const data = JSON.parse(jsonData);
    const product = data.products.find((p) => p.id === params.pid);
    return {
        props: {
            product,
        },
    };
}

export async function getStaticPaths() {
    return {
        paths: [{ params: { pid: "p1" } }, { params: { pid: "p2" } }, { params: { pid: "p3" } }],
        fallback: false,
    };
}
export default ProductDetail;
