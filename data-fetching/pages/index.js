import fs from "fs/promises";
import path from "path";

const Home = (props) => {
    const { products } = props;

    return (
        <ul>
            {products.map((product) => (
                <li key={product.id}>{product.title}</li>
            ))}
        </ul>
    );
};

export async function getStaticProps(context) {
    console.log("generated");
    const filePath = path.join(process.cwd(), "dev_data", "data.json");
    const jsonData = await fs.readFile(filePath, "utf-8");
    const data = JSON.parse(jsonData);
    return {
        props: {
            products: data.products,
        },
        revalidate: 10,
    };
}
export default Home;
