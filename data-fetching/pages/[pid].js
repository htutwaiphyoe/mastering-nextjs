import fs from "fs/promises";
import path from "path";

const ProductDetail = (props) => {
    const { product } = props;
    if (!product) {
        return <p>Loading...</p>;
    }
    return (
        <main>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
        </main>
    );
};

async function getData() {
    const jsonData = await fs.readFile(path.join(process.cwd(), "dev_data", "data.json"), "utf8");
    const data = JSON.parse(jsonData);
    return data;
}
export async function getStaticProps(context) {
    const { params } = context;
    const data = await getData();
    const product = data.products.find((p) => p.id === params.pid);

    if (!product) {
        return {
            notFound: true,
        };
    }
    return {
        props: {
            product,
        },
    };
}

export async function getStaticPaths() {
    const data = await getData();
    const params = data.products.map((p) => ({ params: { pid: p.id } }));
    return {
        paths: params,
        fallback: true,
    };
}
export default ProductDetail;
