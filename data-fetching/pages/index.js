import fs from "fs/promises";
import path from "path";

import Link from "next/link";

const Home = (props) => {
    const { products } = props;

    return (
        <ul>
            {products.map((product) => (
                <li key={product.id}>
                    <Link href={`/${product.id}`}>{product.title}</Link>
                </li>
            ))}
        </ul>
    );
};

export async function getStaticProps(context) {
    const filePath = path.join(process.cwd(), "dev_data", "data.json");
    const jsonData = await fs.readFile(filePath, "utf-8");
    const data = JSON.parse(jsonData);
    if (data.length === 0) {
        return {
            notFound: true,
        };
    }
    if (!data) {
        return {
            redirect: {
                destination: "/home",
            },
        };
    }
    return {
        props: {
            products: data.products,
        },
        revalidate: 10,
    };
}
export default Home;
